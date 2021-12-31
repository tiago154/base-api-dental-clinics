import { User } from '../user'

export interface AuthRepository {
  registerUser: (user: User) => Promise<Partial<User>>
  getUserByEmail: (email: string) => Promise<Partial<User> | undefined>
}
