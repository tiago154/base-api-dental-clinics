import { createClients } from './clients'
import { createControllers } from './controllers'
import { createDomains } from './domains'
import { createRepositories } from './repositories'
import config from './config'

const clients = createClients({ config })

const repositories = createRepositories({ clients })

const domains = createDomains({ repositories })

const controllers = createControllers({ domains })

export {
  controllers
}
