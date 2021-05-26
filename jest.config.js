module.exports = {
  roots: ['<rootDir>/src'],
  coverageDirectory: ['<rootDir>/src/**/*.ts'],
  coverageProvider: 'coverage',
  testEnvorinment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
