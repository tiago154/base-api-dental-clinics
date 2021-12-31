import * as utils from '../utils'
import { createClients } from '../clients'
import { createControllers } from './create-controllers'
import { createDomains } from '../domains'
import { createRepositories } from '../repositories'
import config from '../config'

const clients = createClients({ config })
const repositories = createRepositories({ clients })
const domains = createDomains({ repositories, utils, config })
const controllers = createControllers({ domains })

export {
  controllers
}
