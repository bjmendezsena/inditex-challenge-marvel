import { useQuery } from '@tanstack/react-query';

import {
  marvelApi,
  ExtractFnReturnType,
  QueryConfig,
  marvelApiUrls,
} from '@/lib';
import { queryKeys } from '@/constants';
import { Data, Character } from '@/types';
import { GetCharactersFilters } from '@/features/character-list';

export async function getCharacters({
  limit,
  nameStartsWith,
}: GetCharactersFilters): Promise<Data<Character>> {
  return marvelApi
    .get(marvelApiUrls.characters.list, {
      params: {
        limit,
        nameStartsWith,
      },
    })
    .then(({ data }) => data);
}

type QueryFnType = typeof getCharacters;

interface UseCharactersParams {
  config?: QueryConfig<QueryFnType>;
  filters?: GetCharactersFilters;
}

export function useCharacters({
  config,
  filters = {
    limit: 50,
  },
}: UseCharactersParams = {}) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: queryKeys.getCharacters(filters),
    queryFn: () => getCharacters(filters),
  });
}
