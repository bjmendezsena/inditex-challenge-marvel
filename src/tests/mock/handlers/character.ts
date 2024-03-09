import { HttpResponse, ResponseResolver } from 'msw';
import { getCharacterMockResponse } from '../data';
export const getCharacterHandler: ResponseResolver = () =>
  HttpResponse.json({
    data: getCharacterMockResponse,
  });
