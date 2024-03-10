import { useState, useMemo } from 'react';
import { useFavourites } from '@/context';
import { useCharacters, GetCharactersFilters } from '@/features/character-list';

export const useCharacterList = () => {
  const [searchValue, setSearchValue] = useState<string>();

  const { showFavourites, favourites, setShowFavourites } = useFavourites();

  const [characterFilters, setCharacterFilters] =
    useState<GetCharactersFilters>();

  const { data, isLoading } = useCharacters({
    filters: characterFilters,
  });

  const handleSearch = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(target.value);
    if (!target.value) {
      setCharacterFilters({
        nameStartsWith: undefined,
      });
    }
  };

  const handleClickFilter = () => {
    if (!searchValue) return;

    setShowFavourites(false);

    setCharacterFilters({
      nameStartsWith: searchValue,
    });
  };

  const { results = [], count = 0 } = data || {};

  const countsResults = useMemo(() => {
    if (showFavourites) {
      return favourites.length;
    }
    return count;
  }, [count, favourites, showFavourites]);

  const characterList = useMemo(() => {
    if (showFavourites) {
      return favourites;
    }
    return results;
  }, [showFavourites, favourites, results]);

  return {
    searchValue,
    handleSearch,
    handleClickFilter,
    showFavourites,
    countsResults,
    characterList,
    isLoading,
  };
};
