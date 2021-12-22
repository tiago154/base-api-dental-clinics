import { ClientsInjection } from '../interfaces'
import { configDatabase, database } from './database'

export const createClients = ({ config }: ClientsInjection) => ({
  database: database(config)(configDatabase)
})
