import { BaseException } from './baseExceptions.js'

export class ForbiddenException extends BaseException {
  constructor(message) {
    super(message, 403)
  }
}
