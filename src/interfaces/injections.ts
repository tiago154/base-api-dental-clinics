import { Clients } from './clients'
import { Config } from '.'
import { Domains } from './domains'
import { Repositories } from './repositories'

export interface ClientsInjection {
  config: Config
}

export interface RepositoriesInjection {
  clients: Clients
}

export interface DomainsInjection {
  repositories: Repositories
}

export interface ControllersInjection {
  domains: Domains
}
