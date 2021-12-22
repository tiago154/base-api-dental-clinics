import { Knex } from 'knex'

export const up = async (knex: Knex): Promise<void> =>
  knex.schema.raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')

export const down = async (knex: Knex): Promise<void> => {}
