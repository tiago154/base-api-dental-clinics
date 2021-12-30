import { ControllersInjection } from '../../interfaces'
import { NextFunction, Request, Response } from 'express'
import asyncHandler from 'express-async-handler'

export const register = ({ domains }: ControllersInjection) => asyncHandler(async (request: Request, response: Response, next: NextFunction) => {
  const { email, password } = request.body
  const registeredUser = await domains.auth.register({ email, password })
  response.status(201).json(registeredUser)
})
