interface DatabaseConfig {
  host: string,
  user: string,
  password: string,
  databaseName: string,
  port: number
}

export interface Config {
  port: number,
  database: DatabaseConfig
}
