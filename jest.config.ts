export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(tsx|ts)?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setup-tests.ts'],
};
