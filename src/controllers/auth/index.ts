import { ControllersInjection } from '../../interfaces'
import { register } from './actions'

export const createAuthController = (injection: ControllersInjection) => ({
  register: register(injection)
})
