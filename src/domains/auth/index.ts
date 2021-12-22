import { DomainsInjection } from '../../interfaces'
import { register } from './actions'

export const createAuthDomain = (injection: DomainsInjection) => ({
  register: register(injection)
})
