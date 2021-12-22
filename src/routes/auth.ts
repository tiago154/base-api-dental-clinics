import { controllers } from '../controllers-with-injections'
import express from 'express'

const { authController } = controllers

const router = express.Router()

router.post('/register', authController.register)

export default router
