import { DomainsInjection } from '../interfaces'
import { createAuthDomain } from './auth'

export const createDomains = (injection: DomainsInjection) => ({
  auth: createAuthDomain(injection)
})
