import { RepositoriesInjection, User } from '../../interfaces'

export const registerUser = ({ clients: { database } }: RepositoriesInjection) => async (user: User): Promise<User> => {
  const [firstRow] = await database('users')
    .insert(user)
    .returning(['*'])
    .catch(error => {
      throw error
    })

  return firstRow
}
