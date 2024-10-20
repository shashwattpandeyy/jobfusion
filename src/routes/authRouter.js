import { Router } from 'express'
import asyncHandler from 'express-async-handler'
import * as authController from '../controllers/authController.js'
export default function authRouter() {
  const router = Router()

  router.post('/login', asyncHandler(authController.login))

  router.post('/reset', asyncHandler(authController.reset))

  router.post('/verify', asyncHandler(authController.verify))

  return router
}
