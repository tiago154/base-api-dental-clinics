import express, { NextFunction, Request, Response } from 'express'
import routes from './routes'

const server = express()

server.use(express.json())

server.use('/api', routes)

server.use((_error: Error, _request: Request, response: Response, _next: NextFunction) => {
  response.status(500).json({ message: 'internal error', status: 'error' })
})

export default server
