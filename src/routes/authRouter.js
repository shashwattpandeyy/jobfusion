import { Router } from 'express'
import asyncHandler from 'express-async-handler'
import * as authController from '../controllers/authController.js'
import respond from '../middlewares/respond.js'
export default function authRouter() {
  const router = Router()

  router.post('/login', asyncHandler(authController.login), respond)

  router.post('/reset', asyncHandler(authController.reset))

  router.post('/verify', asyncHandler(authController.verify))

  return router
}
