import 'dotenv/config'
import server from './server'
import config from './config'

const { port } = config

server.listen(port, () => console.log(`Server on http://localhost:${port}`))
