import { Config } from '../types'

const {
  PORT
} = process.env

const config: Config = {
  port: Number(PORT) || 3000
}

export default config
