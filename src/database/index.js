import Knex from 'knex'
import logger from '../logger.js'

let db

export async function initializeDatabase() {
  db = Knex({
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      application_name: process.env.DB_APPLICATION_NAME,
    },
  })

  try {
    await db.raw('SELECT 1')
    logger.info('Database connected successfully')
  } catch (error) {
    logger.error(error)
    process.exit(1)
  }
}

export function getDatabase() {
  if (!db) {
    logger.error('Database not found')
  }

  return db
}
