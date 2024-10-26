import bcrypt from 'bcrypt';
import { UnauthorizedException } from '../exceptions/unauthorized.js';

export async function validatePassword(userPassword, inputPassword) {
  const match = await bcrypt.compare(inputPassword, userPassword)
  
  if(!match) {
    throw new UnauthorizedException("Enter correct email or password")
  }
}