//* configuracion de winstons para el manejo de logs.
//* su aplicacion va mas alla que solo para el manejo de errores.

const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, simple } = format;

const logger = createLogger({
    format: combine(
        //label({ label: 'CUSTOM', message: true }),
        timestamp(),
        simple(),
        printf(info => `[${info.timestamp}] - ${info.level} => ${info.message}`),
    ),
    transports: [
        new transports.Console(),
        new transports.File({
            maxsize: 5210000, //peso maximo del archivo en bytes
            maxFiles: 5, //cantidad maxima de archivos
            filename: `${__dirname}/../logs/errors.log`
        })
    ]
    
})

module.exports = logger