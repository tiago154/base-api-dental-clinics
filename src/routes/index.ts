import authRouter from './auth'
import express, { Request, Response } from 'express'

const router = express.Router()

router.use('/auth', authRouter)

router.get('/health-check', (request: Request, response: Response) => {
  return response.json({ status: 'OK' })
})

export default router
