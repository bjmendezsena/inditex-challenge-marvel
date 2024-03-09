import dayjs from 'dayjs';
import { useMemo } from 'react';
import { IComic } from '@/features/character/types';
import { AsyncImage } from '@/components';
import { buildThumbnailImage } from '@/utils';

export interface IComicProps {
  comic: IComic;
}

export const Comic = ({ comic }: IComicProps) => {
  const imgUrl = useMemo(() => buildThumbnailImage(comic.thumbnail), [comic]);

  const onSaleDate = useMemo(() => {
    const { dates } = comic;
    const date = dates.find(date => date.type === 'onsaleDate');
    if (!date) return '-';

    return dayjs(date.date).format('YYYY');
  }, [comic]);

  return (
    <div className="comic__list__body__item">
      <div className="comic__list__body__item__image">
        <AsyncImage
          loader={() => imgUrl}
          src={imgUrl}
          alt={comic.title}
          fill
          priority
        />
      </div>
      <div className="comic__list__body__item__footer">
        <span className="comic__list__body__item__footer__title">
          {comic.title}
        </span>
        <span className="comic__list__body__item__footer__subtitle">
          {onSaleDate}
        </span>
      </div>
    </div>
  );
};
