import '@testing-library/jest-dom';
import { server } from '@/tests';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
