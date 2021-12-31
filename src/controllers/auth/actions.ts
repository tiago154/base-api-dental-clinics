import { ControllersInjection } from '../../interfaces'
import { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'

export const register = ({ domains }: ControllersInjection) => asyncHandler(async (request: Request, response: Response) => {
  const { email, password } = request.body
  const registeredUser = await domains.auth.register({ email, password })
  response.status(201).json(registeredUser)
})

export const login = ({ domains }: ControllersInjection) => asyncHandler(async (request: Request, response: Response) => {
  const { email, password } = request.body

  const { data, message } = await domains.auth.login({ email, password })

  if (message === 'User not exist') {
    return response.status(404).json({ message }).end()
  }

  if (message === 'Invalid password') {
    return response.status(401).json({ message }).end()
  }

  response.status(200).json({ ...data, message })
})
