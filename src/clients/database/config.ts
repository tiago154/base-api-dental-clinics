import { Config } from '../../interfaces'
import { Knex } from 'knex'
import config from '../../config'

const configDatabase = (config: Config): Knex.Config => {
  const databaseConfig: Knex.Config = {
    client: 'pg',
    connection: {
      host: config.database.host,
      port: config.database.port,
      user: config.database.user,
      password: config.database.password,
      database: config.database.databaseName
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations'
    }
  }

  return databaseConfig
}

export {
  configDatabase
}

export default configDatabase(config)
