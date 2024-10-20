import authRouter from './authRouter.js'
import interviewRouter from './interviewRouter.js'
import userRouter from './userRouter.js'

export default function initializeRoutes() {
  const authRoute = authRouter()
  const interviewRoute = interviewRouter()
  const userRoute = userRouter()
  return { interviewRoute, authRoute, userRoute }
}
