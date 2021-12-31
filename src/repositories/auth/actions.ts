import { RepositoriesInjection, User } from '../../interfaces'

export const registerUser = ({ clients: { database } }: RepositoriesInjection) => async (user: User): Promise<Partial<User>> => {
  const [firstRow] = await database<User>('users')
    .insert(user)
    .returning(['*'])
    .catch(error => {
      throw error
    })

  return firstRow
}

export const getUserByEmail = ({ clients: { database } }: RepositoriesInjection) => async (email: string): Promise<Partial<User> | undefined> => {
  const userResult = await database<User>('users')
    .where({ email })
    .first()

  return userResult
}
