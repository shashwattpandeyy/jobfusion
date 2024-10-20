import morgan from 'morgan'
import logger from '../logger.js'

const expressLogger = morgan(':method :url :status - :response-time ms', {
  stream: { write: (message) => logger.info(message) },
})

export default expressLogger
