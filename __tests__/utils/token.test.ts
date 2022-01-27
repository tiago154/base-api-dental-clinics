import { Config } from '../../src/interfaces'
import { generateToken } from '../../src/utils/token'
import { sign } from 'jsonwebtoken'

jest.mock('jsonwebtoken')

describe('utils', () => {
  describe('generateToken', () => {
    describe('when function receives the arguments correctly', () => {
      it('should sign and return a token', () => {
        const fakeToken = 'fakeToken'
        const fakeId = 'fakeId'

        const mockedSign = jest.mocked(sign)
        mockedSign.mockImplementation(() => fakeToken)

        const fakeConfig = {
          auth: { secret: 'fakeSecret', expiresIn: 1000 }
        } as Config

        const result = generateToken(fakeId, fakeConfig)

        expect(sign).toBeCalledTimes(1)
        expect(sign).toBeCalledWith(
          { id: fakeId },
          fakeConfig.auth.secret,
          { expiresIn: fakeConfig.auth.expiresIn }
        )
        expect(result).toBe(fakeToken)
      })
    })
  })
})
