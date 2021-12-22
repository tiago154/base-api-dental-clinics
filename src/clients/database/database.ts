import { Config } from '../../interfaces'
import knex, { Knex } from 'knex'

const database = (config: Config) => (configFunction: (config: Config) => Knex.Config): Knex => {
  const databaseConfig: Knex.Config = configFunction(config)
  return knex(databaseConfig)
}

export {
  database
}
