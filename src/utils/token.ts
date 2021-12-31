import { Config } from '../interfaces'
import jwt from 'jsonwebtoken'

export const generateToken = (id: string, config: Config): string =>
  jwt.sign({ id }, config.auth.secret, { expiresIn: config.auth.expiresIn })
