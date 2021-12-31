import { DomainsInjection } from '../../interfaces'
import { login, register } from './actions'

export const createAuthDomain = (injection: DomainsInjection) => ({
  register: register(injection),
  login: login(injection)
})
