import { DomainsInjection, User } from '../../interfaces'
import { encrypt } from './encryption'

export const register = ({ repositories }: DomainsInjection) => async (user: User) => {
  const hashPassword = await encrypt(user.password)

  const userWithHashPassword = {
    ...user,
    password: hashPassword
  }

  const { password, ...registeredUser } = await repositories.auth.registerUser(userWithHashPassword)
  return registeredUser
}
