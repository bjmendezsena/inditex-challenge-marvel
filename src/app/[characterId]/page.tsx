/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useMemo } from 'react';
import {
  useCharacter,
  CharacterHeaderPage,
  ComicsSection,
} from '@/features/character';
import { useFavourites } from '@/context';
type Params = {
  characterId: string;
};
type Props = {
  params: Params;
};
export default function Page({ params }: Props) {
  const { characterId } = params;

  const numberCharacterId = useMemo(() => {
    return parseInt(characterId);
  }, [characterId]);

  const { data: character, isLoading } = useCharacter({
    characterId: numberCharacterId,
  });
  const { checkIsFavourite, toggleFavourite } = useFavourites();
  const handleClickFavourite = () => {
    if (!character) return;
    toggleFavourite(character);
  };

  const isFavourite = useMemo(() => {
    if (!character) return false;
    return checkIsFavourite(character);
  }, [character, checkIsFavourite]);

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <CharacterHeaderPage
        imageUrl={
          character?.thumbnail.path + '.' + character?.thumbnail.extension
        }
        name={character?.name || ''}
        description={character?.description || ''}
        isFavorite={isFavourite}
        isLoading={isLoading}
        onFavoriteClick={handleClickFavourite}
      />
      <ComicsSection characterId={numberCharacterId} />
    </div>
  );
}
