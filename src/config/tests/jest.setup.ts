import "@testing-library/jest-dom";

import { server } from ".";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

