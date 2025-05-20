const swaggerAutogen = require('swagger-autogen')({openapi: '3.0.0'})

const outputFile = './swagger_output_logica.json'
const endpointsFiles = ['./app/Routes/dte.route.js']
const doc = require('./swagger.doc.js').doc

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./server.js')
})