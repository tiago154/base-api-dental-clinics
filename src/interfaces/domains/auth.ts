import { User } from '../user'

export interface AuthDomain {
  register: (user: User) => Promise<Partial<User>>
}
