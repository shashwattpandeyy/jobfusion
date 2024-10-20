import winston, { createLogger, transports } from 'winston'
const { combine, cli, timestamp, printf, colorize } = winston.format

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6,
}

winston.addColors({
  info: 'bold blue',
  warn: 'italic yellow',
  error: 'bold red',
  debug: 'green',
})

const logger = createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: combine(
    cli(),
    timestamp({
      format: 'YYYY-MM-DD hh:mm:ss.SSS A',
    }),
    colorize({ all: true }),
    printf((info) => `[${info.level}][${info.timestamp}]${info.message}`),
  ),
  transports: [new transports.Console()],
})

export default logger
