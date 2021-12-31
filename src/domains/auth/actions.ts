import { AuthDomainResponse, DomainsInjection, User } from '../../interfaces'

export const register = ({ repositories, utils }: DomainsInjection) => async (user: User): Promise<Partial<User>> => {
  const hashPassword = await utils.encryption.encrypt(user.password)

  const userWithHashPassword = {
    ...user,
    password: hashPassword
  }

  const { password, ...registeredUser } = await repositories.auth.registerUser(userWithHashPassword)
  return registeredUser
}

export const login = ({ repositories, utils, config }: DomainsInjection) => async (user: User): Promise<AuthDomainResponse> => {
  const databaseUser = await repositories.auth.getUserByEmail(user.email)
  // @TODO Transformar mensagens em enums
  if (!databaseUser) {
    return { message: 'User not exist' }
  }

  // @TODO Transformar mensagens em enums
  if (!await utils.encryption.compare(user.password, String(databaseUser.password))) {
    return { message: 'Invalid password' }
  }

  const token = utils.token.generateToken(String(databaseUser.id), config)

  const { password, ...userResponse } = databaseUser

  // @TODO Transformar mensagens em enums
  return {
    data: { ...userResponse, token },
    message: 'Success'
  }
}
