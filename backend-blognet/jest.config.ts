import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: '.',
  testRegex: './*\\.test\\.ts$',
  coverageProvider: 'v8',
  coverageReporters: ['json-summary', 'text'],
  collectCoverageFrom: [
    'src/**/*',
    '!**/node_modules/**',
    '!**/abstract*.ts',
    '!src/interfaces/**',
    '!src/server.ts',
    '!src/models/**',
    '!src/database/**',
  ],
  coverageDirectory: './coverage',
  coverageThreshold: {
    global: {
      functions: 60,
      lines: 50,
      branches: 70
    },
  }
};
export default config;