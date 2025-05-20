const  {logFormat}  = require('../Helpers/Utils')
const msLogica = require('../Services/aclSii.service')
const mockService = require('../Services/mockSignatureService')

async function signatureDte(req, res, next) 
{    try {
            logFormat('info', 'signature.controller', 'signatureDte', req.headers,  `Se recibe el cuerpo del mensaje (body) desde la solicitud (request)`, `${JSON.stringify(req.body)}`)
             const sigatureDteCaf = await mockService.mockSignatureService(req.headers, req.body)
             req.body.CAF= sigatureDteCaf;

            const {data: dteResponseData} = await msLogica.createDteService(req)
            logFormat('info', 'signature.controller', 'signatureDte', req.headers, `Desde la función createDteService se obtiene el estado de la creación de una DTE`, dteResponseData)
            res.status(200).send(dteResponseData) 
    } catch (error) {
        logFormat('error', error.file, error._function, req.headers, error?.message, error.stack)
            next(error)
    }
   

}
module.exports = {signatureDte}