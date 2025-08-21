const { createLogger, format, transports } = require("winston");
const { combine, timestamp, printf } = format;

const customFormat = printf(({ timestamp, level, message }) => {
  return `${timestamp} : ${level}  : ${message}`;
});

const logger = createLogger({
  format: combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), customFormat),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "combined.log" }),
    new transports.File({ filename: "error.log", level: "error" }),
  ],
});

module.exports = logger;
