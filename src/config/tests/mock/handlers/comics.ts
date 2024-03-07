import { HttpResponse, ResponseResolver } from "msw";
import { getCharacterComicsMockResponse } from "../data";
export const getCharacterComicsHandler: ResponseResolver = () =>
  HttpResponse.json({
    data: getCharacterComicsMockResponse,
  });
