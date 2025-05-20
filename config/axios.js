const axiosConf = (url, serviceH, country, customerId, commerce, channel, apiVersion, route, language) => {
    const headers = {
        'Content-Type': 'application/json',
        service: process.env[serviceH],
        'x-country': country,
        'x-customerId': customerId,
        'x-commerce': commerce,
        'x-channel': channel,
        'x-api-version': apiVersion
    }

       let urlBase = process.env[url] || 'http://localhost:3005/api' 


    return {
        baseUrl: `${urlBase}/${route}`,
        option: {
            headers: headers
        }
    }
}

module.exports = {axiosConf}
