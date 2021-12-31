import { Clients } from './clients'
import { Config } from '.'
import { Domains } from './domains'
import { Repositories } from './repositories'
import { Utils } from './utils'

export interface ClientsInjection {
  config: Config
}

export interface RepositoriesInjection {
  clients: Clients
}

export interface DomainsInjection {
  repositories: Repositories
  utils: Utils
  config: Config
}

export interface ControllersInjection {
  domains: Domains
}
