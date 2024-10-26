import { BaseException } from "./baseExceptions.js";

class InvalidPayloadException extends BaseException { 
  constructor(message) { 
    super(message, 400);
  }
}

export default InvalidPayloadException