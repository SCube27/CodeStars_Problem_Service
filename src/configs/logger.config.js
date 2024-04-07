const winston = require('winston');
const { LOGS_URL } = require('./server.config');
require('winston-mongodb');

const allowedTransports = [];

// Console logging
allowedTransports.push(new winston.transports.Console({
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
        }),
        winston.format.printf((log) => `${log.timestamp} [${log.level}]: ${log.message}`)
    )
}));

// Database Logging (Not working)
// allowedTransports.push(new winston.transports.MongoDB({
//     level: 'error',
//     db: LOGS_URL,
//     collection: 'log',
//     format: winston.format.combine(
//         winston.format.timestamp({
//             format: 'YYYY-MM-DD HH:mm:ss',
//         }),
//         winston.format.printf((log) => `${log.timestamp} [${log.level}]: ${log.message}`)
//     )
// }));

// File Logging
allowedTransports.push(new winston.transports.File({
    filename: 'app.log'
}));

const logger = winston.createLogger({
    format: winston.format.combine(
        // First args to the combine method to show the time for log in given format
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
        }),
        // Second args to the combine method to show the log in following format
        winston.format.printf((log) => `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`)
    ),
    transports: allowedTransports
});

module.exports = logger;