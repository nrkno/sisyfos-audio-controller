const winston = require('winston')
const Elasticsearch = require('winston-elasticsearch')
const processArgs = require('minimist')(process.argv.slice(2))

const loggerIp = process.env.loggerIp || processArgs.loggerIp
const loggerPort = process.env.loggerPort || processArgs.loggerPort || 9200
const loggerLevel = process.env.loggerLevel || processArgs.loggerLevel || 'info'
const loggerFileLevel =
    process.env.loggerFileLevel || processArgs.loggerFileLevel || 'error'
const loggerConsoleLevel =
    process.env.loggerConsoleLevel || processArgs.loggerConsoleLevel || 'error'

console.log('Elastic Ip :', loggerIp)
console.log('Elastic Port :', loggerPort)

let elasticTransport
if (loggerIp) {
    const esTransportOpts = {
        level: loggerLevel,
        indexPrefix: 'sisyfos',
        clientOpts: { node: 'http://' + loggerIp + ':' + String(loggerPort) },
    }
    elasticTransport = new Elasticsearch(esTransportOpts), //everything info and above goes to elastic
}



const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({
            filename: 'logfile.log',
            level: loggerFileLevel,
        }), //save errors on file
        new winston.transports.Console({ level: loggerConsoleLevel }), //save errors on file
        elasticTransport
    ],
})

if (process.env.NODE_ENV !== 'production') {
    logger.add(
        new winston.transports.Console({
            //we also log to console if we're not in production
            format: winston.format.simple(),
        })
    )
}

export { logger }
