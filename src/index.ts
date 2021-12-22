import 'dotenv/config'
import config from './config'
import server from './server'

const { port } = config

server.listen(port, () => console.log(`Server on http://localhost:${port}`))
