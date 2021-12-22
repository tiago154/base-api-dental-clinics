import { Knex } from 'knex'

export const up = async (knex: Knex): Promise<void> =>
  knex.schema.createTable('users', table => {
    table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()'))
    table.string('email').notNullable().unique()
    table.string('password').notNullable()
  })

export const down = async (knex: Knex): Promise<void> => knex.schema.dropTable('users')
