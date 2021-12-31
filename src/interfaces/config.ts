interface DatabaseConfig {
  host: string
  user: string
  password: string
  databaseName: string
  port: number
}

interface AuthConfig {
  secret: string
  expiresIn: number
}

export interface Config {
  port: number
  database: DatabaseConfig
  auth: AuthConfig
}
