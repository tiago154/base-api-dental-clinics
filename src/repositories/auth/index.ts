import { RepositoriesInjection } from '../../interfaces'
import { getUserByEmail, registerUser } from './actions'

export const createAuthRepository = (injection: RepositoriesInjection) => ({
  registerUser: registerUser(injection),
  getUserByEmail: getUserByEmail(injection)
})
