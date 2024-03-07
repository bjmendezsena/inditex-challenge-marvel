import { useCharacterComics } from "@/modules/character";
import { Comic } from "./Comic";
import { ComicSkeleton } from "./ComicSkeleton";
import "./ComicsSection.scss";
export interface ComicsSectionProps {
  characterId: number;
  isLoadingCharacter?: boolean;
}
export const ComicsSection = ({
  characterId,
  isLoadingCharacter,
}: ComicsSectionProps) => {
  const { data, isLoading } = useCharacterComics({
    characterId,
  });
  const { results = [] } = data || {};
  return (
    <div className='comic__list'>
      <span className='comic__list__title'>COMICS</span>
      <div className='comic__list__body'>
        {isLoading
          ? Array.from({ length: 10 }).map((_, index) => (
              <ComicSkeleton key={index} />
            ))
          : results?.map((comic) => <Comic comic={comic} key={comic.id} />)}
      </div>
    </div>
  );
};
