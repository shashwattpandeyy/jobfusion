import { BaseException } from './baseExceptions.js'

export class UniqueEmailException extends BaseException {
  constructor(message) {
    super(message)
  }
}
