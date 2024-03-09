import "@testing-library/jest-dom";
import { server } from "@/config/tests";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
