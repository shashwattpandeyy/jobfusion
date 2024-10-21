import { BaseException } from './baseExceptions.js'

export class Forbidden extends BaseException {
  constructor(message) {
    super(403, message)
  }
}
