'use client';
import { Input, MagnifyingGlassIcon, IconButton } from '@/components';
import { CharacterList, useCharacterList } from '@/features/character-list';

export default function CharacterListPage() {
  const {
    characterList,
    countsResults,
    handleClickFilter,
    handleSearch,
    isLoading,
    searchValue,
  } = useCharacterList();

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
      <CharacterList isLoading={isLoading} characters={characterList} />
    </div>
  );
}
