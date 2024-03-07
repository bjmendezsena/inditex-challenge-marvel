"use client";
import { useMemo } from "react";
import {
  useCharacter,
  CharacterHeaderPage,
  ComicsSection,
} from "@/modules/character";
import { useFavourites } from "@/context";
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

  const { data, isLoading } = useCharacter({
    characterId: numberCharacterId,
  });
  const { checkIsFavourite, toggleFavourite } = useFavourites();
  const handleClickFavourite = () => {
    toggleFavourite(numberCharacterId);
  };

  const isFavourite = checkIsFavourite(numberCharacterId);

  return (
    <div className='flex flex-col w-full overflow-x-hidden'>
      <CharacterHeaderPage
        imageUrl={data?.thumbnail.path + "." + data?.thumbnail.extension}
        name={data?.name || ""}
        description={data?.description || ""}
        isFavorite={isFavourite}
        isLoading={isLoading}
        onFavoriteClick={handleClickFavourite}
      />
      <ComicsSection
        isLoadingCharacter={isLoading}
        characterId={numberCharacterId}
      />
    </div>
  );
}
