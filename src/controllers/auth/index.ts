import { ControllersInjection } from '../../interfaces'
import { login, register } from './actions'

export const createAuthController = (injection: ControllersInjection) => ({
  register: register(injection),
  login: login(injection)
})
