'use client';
import { useState, useMemo } from 'react';
import { Input, MagnifyingGlassIcon, IconButton } from '@/components';
import { useFavourites } from '@/context';
import {
  CharacterList,
  useCharacters,
  GetCharactersFilters,
} from '@/features/character-list';

export default function CharacterListPage() {
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

  return (
    <div className="flex flex-col gap-16 px-16 align-stretch">
      <div className="flex mt-32">
        <Input
          onChange={handleSearch}
          onKeyDown={e => e.key === 'Enter' && handleClickFilter()}
          placeholder="Search"
          value={searchValue || ''}
          leftAddon={
            <IconButton onClick={handleClickFilter}>
              <MagnifyingGlassIcon size="sm" />
            </IconButton>
          }
        />
      </div>
      <span>{isLoading ? 'Loading...' : `${countsResults} RESULTS`}</span>
      <CharacterList
        isLoading={isLoading}
        characters={showFavourites ? favourites : results}
      />
    </div>
  );
}
