const axios = require('axios').default
const {axiosConf} = require('../../config/axios')
const {CustomAxiosError} = require('../../config/Errors/axios.error')

async function createDteService(req) {
    let axiosResponse = null
    
    const config = axiosConf(
        'MS_ACL_SII_URL',
        'SERVICE_MS_ACL_SII',
        req.headers['x-country'],
        req.headers['x-customerid'],
        req.headers['x-commerce'],
        req.headers['x-channel'],
        req.headers['x-api-version'],
        'dteAcl'
    )
    
    await  axios.post(`${config.baseUrl}`, req.body, config.option)
        .then((response) => {
            axiosResponse = response
        })
        .catch((error) => {
            throw new CustomAxiosError(error, 'msDteLogic.service', 'createDteService')
        })
    return axiosResponse
}

module.exports = {createDteService}