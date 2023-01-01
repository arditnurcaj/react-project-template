export default {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.(tsx|ts)?$': 'ts-jest',
  },
  coveragePathIgnorePatterns: [
    '<rootDir>/src/test/',
    '<rootDir>/node_modules/',
  ],
  setupFilesAfterEnv: ['<rootDir>/src/setup-tests.ts'],
};
