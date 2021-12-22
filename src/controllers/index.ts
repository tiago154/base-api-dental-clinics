import { ControllersInjection } from '../interfaces'
import { createAuthController } from './auth'

export const createControllers = (injection: ControllersInjection) => ({
  authController: createAuthController(injection)
})
