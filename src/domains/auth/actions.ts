import { DomainsInjection, User } from '../../interfaces'

export const register = ({ repositories }: DomainsInjection) => async (user: User) => {
  // @todo Encriptar senha do usuário
  const { password, ...registeredUser } = await repositories.auth.registerUser(user)
  return registeredUser
}
