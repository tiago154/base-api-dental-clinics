import { AuthDomainResponse } from '../responses'
import { User } from '../user'

export interface AuthDomain {
  register: (user: User) => Promise<Partial<User>>
  login: (user: User) => Promise<AuthDomainResponse>
}
