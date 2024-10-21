import { BaseException } from './baseExceptions.js'

export class FailedValidationException extends BaseException {
  constructor(message, option) {
    super(message, 400)
    this.field = option?.field
    this.value = option?.value
  }
}
