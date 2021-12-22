import { RepositoriesInjection } from '../interfaces'
import { createAuthRepository } from './auth'

export const createRepositories = (injection: RepositoriesInjection) => ({
  auth: createAuthRepository(injection)
})
