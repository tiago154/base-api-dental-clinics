import { Config } from './config'

interface Encryption {
  encrypt: (text: string) => Promise<string>
  compare: (originalText: string, encryptedText: string) => Promise<boolean>
}

interface Token {
  generateToken: (id: string, config: Config) => string
}

export interface Utils {
  encryption: Encryption
  token: Token
}
