import { HttpResponse, ResponseResolver } from 'msw';
import { getCharacterListMockResponse } from '../data';

export const getCharacterListHandler: ResponseResolver = () =>
  HttpResponse.json({
    data: getCharacterListMockResponse,
  });
