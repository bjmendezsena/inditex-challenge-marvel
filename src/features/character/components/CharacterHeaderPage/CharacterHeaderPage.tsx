'use client';
import { AsyncImage, FavButton } from '@/components';
import clsx from 'clsx';
import './CharacterHeaderPage.scss';

export type CharacterHeaderPageProps = {
  imageUrl: string;
  name: string;
  description: string;
  isFavorite: boolean;
  onFavoriteClick: () => void;
  isLoading?: boolean;
};
export const CharacterHeaderPage = ({
  imageUrl,
  name,
  description,
  isFavorite,
  isLoading,
  onFavoriteClick,
}: CharacterHeaderPageProps) => {


  return (
    <div className="characterHeaderPage">
      <div className="characterHeaderPage__content">
        <div className="characterHeaderPage__content__image">
          <AsyncImage
            isLoading={isLoading}
            loader={() => imageUrl}
            src={imageUrl}
            alt={name}
            priority
            fill
            unoptimized
          />
        </div>
        <div className="characterHeaderPage__content__info">
          <FavButton
            size="lg"
            isActive={isFavorite}
            onClick={onFavoriteClick}
            className="characterHeaderPage__content__info__fav"
            disabled={isLoading}
          />

          <p className={
            clsx(
              'characterHeaderPage__content__info__name',
              { 'characterHeaderPage__content__info__name--loading': isLoading },
            )
          }>{name}</p>
          <p className="characterHeaderPage__content__info__description">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
