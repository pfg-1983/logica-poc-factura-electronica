const {CustomAxiosError} = require('../../config/Errors/axios.error')
const moment = require('moment')
let fecha = moment().format('YYYY-MM-DD')


function mockResponde(emisor, items, receptor,tipoDocumento ,montoTotal){
mockSignature.rutEmisor = emisor.rutEmisor;
mockSignature.tipoDocumento = tipoDocumento;
mockSignature.rutReceptor = receptor.rutReceptor;
mockSignature.razonSocReceptor = receptor.razonSocReceptor;
mockSignature.monto =montoTotal;
mockSignature.itemm1 = items[0].nombreItem;
mockSignature.foliosCaf.rutEmisor=emisor.rutEmisor;
mockSignature.foliosCaf.razonSocial = emisor.razonSocial;
mockSignature.foliosCaf.tipoDoc = tipoDocumento;
mockSignature.foliosCaf.rango.desde = 1;
mockSignature.foliosCaf.rango.hasta = 100;
mockSignature.foliosCaf.rspack.clavePublicSii = '111';
mockSignature.foliosCaf.rspack.idClave = 'asdasd';
mockSignature.foliosCaf.firma = 'asasasasas';

}

async function mockSignatureService(headers, body) {
    let axiosResponse = null;
    
    const {'x-country':country,'x-customerid':customerId,'x-commerce': commerce , 'x-channel':channel} = headers
    if(channel == 'DIGITAL' && country == 'CL'){
        mockResponde(body.emisor, body.items,body.receptor, body.tipoDocumento, body.totales.montoTotal);
        return axiosResponse = mockSignature
        
    }    
    return axiosResponse
    
    
}

let mockSignature = {
        rutEmisor: '11111111-1',
        tipoDocumento:33,
        folio:60,
        fecha: fecha.toString(),
        rutReceptor : '22222222-1',
        razonSocReceptor:'',
        monto:1,
        itemm1:'',
        foliosCaf:{
            rutEmisor:'11111111-1',
            razonSocial:'',
            tipoDoc: 33,
            rango:{
                desde: 1,
                hasta:100,
            },
            fechaAprov:'2005-01-15',
            rspack:{
                clavePublicSii:'kghdfjkashfkjsdhk',
                idClave: 'asdfasdfas'
            },
            firma:'sdfjhfjksdhfsjdhfjksd'
        }
}

module.exports = {mockSignatureService}