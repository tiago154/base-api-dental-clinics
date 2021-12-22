import { RepositoriesInjection } from '../../interfaces'
import { registerUser } from './actions'

export const createAuthRepository = (injection: RepositoriesInjection) => ({
  registerUser: registerUser(injection)
})
