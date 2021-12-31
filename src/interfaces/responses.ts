import { User } from '.'

export interface AuthDomainResponse {
  data?: Partial<User>
  message?: string
}
