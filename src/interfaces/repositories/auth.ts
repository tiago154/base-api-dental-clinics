import { User } from '../user'

export interface AuthRepository {
  registerUser: (user: User) => Promise<User>
}
