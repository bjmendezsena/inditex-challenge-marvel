import React from 'react';
import { Character } from '@/types';
import {
  CharacterCard,
  CharacterCardSkeleton,
} from '@/features/character-list';
import './CharacterList.scss';

export interface CharacterListProps {
  characters: Character[];
  isLoading?: boolean;
}

export const CharacterList = ({
  characters,
  isLoading,
}: CharacterListProps) => {
  return (
    <div className="character-list__container">
      {isLoading
        ? Array.from({ length: 16 }).map((_, index) => (
            <CharacterCardSkeleton key={index} />
          ))
        : characters.map(character => (
            <CharacterCard key={character.id} character={character} />
          ))}
    </div>
  );
};
