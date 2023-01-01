export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(tsx|ts)?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/src/tests/setup.ts'],
};
