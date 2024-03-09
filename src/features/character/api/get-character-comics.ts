import { useQuery } from '@tanstack/react-query';

import {
  marvelApi,
  ExtractFnReturnType,
  QueryConfig,
  marvelApiUrls,
} from '@/lib';
import { formatString } from '@/utils';
import { Data } from '@/types';
import { IComic } from '@/features/character/types';
import { queryKeys } from '@/constants';

export async function getCharacterComics(
  characterId: number
): Promise<Data<IComic>> {
  return marvelApi
    .get(formatString(marvelApiUrls.characters.one.comics, characterId))
    .then(({ data }) => data);
}

type QueryFnType = typeof getCharacterComics;

interface UseCharacterComicsParams {
  config?: QueryConfig<QueryFnType>;
  characterId: number;
}

export function useCharacterComics({
  config,
  characterId,
}: UseCharacterComicsParams) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: queryKeys.getCharacterComics(characterId),
    queryFn: () => getCharacterComics(characterId),
  });
}
