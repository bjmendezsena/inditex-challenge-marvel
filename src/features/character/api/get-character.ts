import { useQuery } from '@tanstack/react-query';

import {
  marvelApi,
  ExtractFnReturnType,
  QueryConfig,
  marvelApiUrls,
} from '@/lib';
import { Character } from '@/types';
import { formatString } from '@/utils';
import { queryKeys } from '@/constants';

export async function getCharacter(characterId: number): Promise<Character> {
  return marvelApi
    .get(formatString(marvelApiUrls.characters.one.get, characterId))
    .then(({ data }) => {
      const { results } = data;
      if (!results.length) throw new Error('Character not found');

      return results[0];
    });
}

type QueryFnType = typeof getCharacter;

interface UseCharacterParams {
  config?: QueryConfig<QueryFnType>;
  characterId: number;
}

export function useGetCharacter({ config, characterId }: UseCharacterParams) {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: queryKeys.getCharacter(characterId),
    queryFn: () => getCharacter(characterId),
  });
}
