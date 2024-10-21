export class BaseException extends Error {
  constructor(status, message) {
    super(message)
    this.status = status
  }
}
