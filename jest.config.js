module.exports = {
  clearMocks: true,
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  testRegex: '\\.(test|spec)\\.((js|ts))$',
  testTimeout: 30000,
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/tests/setupTest.ts'],
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.(ts)$': 'ts-jest',
  },
};
