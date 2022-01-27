import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: [
    '**/__tests__/**/*.test.ts'
  ],
  collectCoverageFrom: [
    '**/src/**/*.ts',
    '!**/src/index.ts',
    '!**/src/server.ts',
    '!**/src/interfaces/**',
    '!**/src/clients/database/migrations/**'
  ]
}

export default config
