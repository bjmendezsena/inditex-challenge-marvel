import { useMemo } from 'react';
import { useGetCharacter } from '@/features/character';
import { useFavourites } from '@/context';
import { buildThumbnailImage } from '@/utils';

type UseCharacterProps = {
  characterId: number;
};

export const useCharacter = ({ characterId }: UseCharacterProps) => {
  const { data: character, isLoading } = useGetCharacter({
    characterId,
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

  const characterThumbnail = useMemo(() => {
    if (!character) return '';
    return buildThumbnailImage(character.thumbnail);
  }, [character]);

  return {
    isFavourite,
    handleClickFavourite,
    isLoading,
    character,
    characterThumbnail,
  };
};
