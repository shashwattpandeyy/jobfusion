import { Router } from 'express'
import asyncHandler from 'express-async-handler'
import { get, register, reset, update } from '../controllers/userController.js'

export default function userRouter() {
  const router = Router()

  //create user detail
  router.post('/register', asyncHandler(register))

  //return full user data
  router.get('/:id', asyncHandler(get))

  //update user
  router.patch('/:id', asyncHandler(update))

  //update user password
  router.patch('/:id/password', asyncHandler(reset))

  return router
}
