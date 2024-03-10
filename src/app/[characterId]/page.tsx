/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useMemo } from 'react';
import {
  CharacterHeaderPage,
  ComicsSection,
  useCharacter,
} from '@/features/character';
type Params = {
  characterId: string;
};
type Props = {
  params: Params;
};
export default function Page({ params }: Props) {
  const { characterId } = params;

  const numberCharacterId = useMemo(() => parseInt(characterId), [characterId]);

  const {
    character,
    handleClickFavourite,
    isFavourite,
    isLoading,
    characterThumbnail,
  } = useCharacter({
    characterId: numberCharacterId,
  });

  const { name = '', description = '' } = character || {};

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <CharacterHeaderPage
        imageUrl={characterThumbnail}
        name={name}
        description={description}
        isFavorite={isFavourite}
        isLoading={isLoading}
        onFavoriteClick={handleClickFavourite}
      />
      <ComicsSection characterId={numberCharacterId} />
    </div>
  );
}
