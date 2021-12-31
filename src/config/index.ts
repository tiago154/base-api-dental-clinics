import { Config } from '../interfaces'

const {
  PORT,
  DATABASE_HOST,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_NAME,
  DATABASE_PORT,
  AUTH_SECRET,
  AUTH_EXPIRES_IN
} = process.env

const config: Config = {
  port: Number(PORT) || 3000,
  database: {
    databaseName: String(DATABASE_NAME),
    host: String(DATABASE_HOST),
    password: String(DATABASE_PASSWORD),
    port: Number(DATABASE_PORT),
    user: String(DATABASE_USER)
  },
  auth: {
    expiresIn: Number(AUTH_EXPIRES_IN) || 86400,
    secret: String(AUTH_SECRET)
  }
}

export default config
