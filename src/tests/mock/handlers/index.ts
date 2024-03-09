import { http } from 'msw';
import { marvelApiUrls } from '@/lib/backend-urls';
import { formatString } from '@/utils';
import { getCharacterListHandler } from './character-list';
import { getCharacterHandler } from './character';
import { getCharacterComicsHandler } from './comics';

export const handlers = (baseUrl: string) => {
  return [
    http.get(
      `${baseUrl}${marvelApiUrls.characters.list}`,
      getCharacterListHandler
    ),
    http.get(
      formatString(
        `${baseUrl}${marvelApiUrls.characters.one.get}`,
        ':characterId'
      ),
      getCharacterHandler
    ),
    http.get(
      formatString(
        `${baseUrl}${marvelApiUrls.characters.one.comics}`,
        ':characterId'
      ),
      getCharacterComicsHandler
    ),
  ];
};
