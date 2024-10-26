import { BaseException } from "./baseExceptions.js";

export class UnauthorizedException extends BaseException { 
  constructor(message) {
    super(message, 401)
  }
}