import React from "react";

export const ComicSkeleton = () => {
  return (
    <div className='flex flex-col gap-8'>
      <div className='comic__list__body__item__skeleton__container' />
      <div className='comic__list__body__item__skeleton__title' />
      <div className='comic__list__body__item__skeleton__subtitle' />
    </div>
  );
};
