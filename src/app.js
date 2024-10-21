import express from 'express'
import initializeRoutes from './routes/index.js'
import { initializeDatabase } from './database/index.js'
import expressLogger from './middlewares/expressLogger.js'
import logger from './logger.js'

async function App() {
  logger.info('🚀 Starting Server')

  const app = express()

  app.use(expressLogger)

  await initializeDatabase()

  const routes = initializeRoutes()

  app.use(express.json())

  app.use(express.urlencoded({ extended: true }))

  app.use('/auth', routes.authRoute)

  app.use('/users', routes.userRoute)

  app.use('/interview', routes.interviewRoute)

  return app
}

export default App
