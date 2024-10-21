import { BaseException } from '../baseExceptions.js'
export class DatabaseError extends BaseException {
  constructor(message) {
    super(message, 500)
  }
}
