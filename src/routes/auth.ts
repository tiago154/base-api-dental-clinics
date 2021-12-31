import { controllers } from '../controllers'
import express from 'express'

const { authController } = controllers

const router = express.Router()

router.post('/register', authController.register)
router.post('/login', authController.login)

export default router
