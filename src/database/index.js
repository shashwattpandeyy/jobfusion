import Knex from 'knex'
import logger from '../logger.js'

export async function initializeDatabase() {
  const db = Knex({
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
    // throw new DatabaseError();
  }
}
