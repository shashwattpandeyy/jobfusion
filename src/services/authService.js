import Joi from "joi";
import { getDatabase } from "../database/index.js";
import validatePayload from "../utils/validatePayload.js";
import { UnauthorizedException } from "../exceptions/unauthorized.js";
import { validatePassword } from "../utils/validatePasword.js";
import jsonwebtoken from "jsonwebtoken";


class AuthService { 
  constructor() { 
    this.database = getDatabase();
  }
  
  get Validate() { 
    return {
      auth: Joi.object({
        email: Joi.string().email().required(),
        password: Joi.required()
      })
    }
  }
  
  async checkEmail(email) {
    const user = await this.database.select('id').from('users').where({ email }).first();
    
    if(!user) {
      throw new UnauthorizedException("Enter correct email or password")
    }
  }
  
  async login(input) {
    const schema = this.Validate.auth
    
    validatePayload(schema, input)
    
    const { email, password } = input;
    
    await this.checkEmail(email)
    
    const { password: userPassword } = await this.database.select('password').from('users').where({ email }).first();
    
    await validatePassword(userPassword, password)
    
    const token = await jsonwebtoken.sign({ email }, process.env.KEY, { expiresIn: 36000 })
    
    return { token };
  }
}

export default AuthService;