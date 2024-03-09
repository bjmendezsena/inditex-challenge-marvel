import { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Character } from '@/types';
import { FavButton } from '@/components';
import { useFavourites } from '@/context';
import './CharacterCard.scss';

export type CharacterCardProps = {
  character: Character;
};
export const CharacterCard = ({ character }: CharacterCardProps) => {
  const { checkIsFavourite, toggleFavourite } = useFavourites();

  const imageUrl = useMemo(
    () => character.thumbnail.path + '.' + character.thumbnail.extension,
    [character]
  );

  const handleClickFavButton = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    toggleFavourite(character);
  };

  return (
    <Link href={`/${character.id}`} className="card">
      <div className="card__image">
        <Image
          loader={() => imageUrl}
          src={imageUrl}
          alt={character.name}
          fill
          unoptimized
        />
      </div>
      <div className="card__divider" />
      <div className="card__footer">
        <p>{character.name}</p>
        <FavButton
          onClick={handleClickFavButton}
          isActive={checkIsFavourite(character)}
          size="md"
        />
      </div>
    </Link>
  );
};
