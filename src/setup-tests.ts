import { cleanup } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import { server } from '@/test/server';

// establish API mocking before all tests.
beforeAll(() => server.listen());

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  server.resetHandlers();
  cleanup();
});

// clean up after the tests are finished.
afterAll(() => server.close());
