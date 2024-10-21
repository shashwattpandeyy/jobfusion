import Joi from 'joi'
import { getDatabase } from '../database/index.js'
import { UniqueEmailException } from '../exceptions/uniqueEmail.js'
import logger from '../logger.js'
import { hashPassword } from '../utils/encryption.js'
import { FailedValidationException } from '../exceptions/failedValidation.js'
import { get } from 'lodash-es'

class UserService {
  constructor() {
    this.database = getDatabase()
  }

  async checkUniqueEmail(email) {
    const user = await this.database.select('id').from('users').where({ email }).first()

    if (user) {
      throw new UniqueEmailException('Email already exists')
    }
  }

  validateEmail(email) {
    const schema = Joi.string().email().required()

    const { error } = schema.validate(email)

    if (error) {
      logger.error(error)
      throw new FailedValidationException(error)
    }
  }

  async read(id) {
    // const user = await this.database.select('*').from('users').where({ id })
    // return user
  }

  async update() {}

  async create(input) {
    //TODO: add field validation
    const { email, password, phone_number } = input

    this.validateEmail(email)
    await this.checkUniqueEmail(email)

    const hashedPassword = await hashPassword(password)

    await this.database.insert({ email, password: hashedPassword, phone_number }).into('users')

    logger.info('User Created')
  }

  async delete() {}

  async reset() {}

  async verify() {}
}

export default UserService
