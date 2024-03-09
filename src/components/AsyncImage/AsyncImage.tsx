import { ComponentProps, useState } from 'react';
import NextImage from 'next/image';
import { Spinner } from '@/components';
import clsx from 'clsx';

export type AsncImageProps = {
  isLoading?: boolean;
} & ComponentProps<typeof NextImage>;

export const AsyncImage = ({ isLoading, ...props }: AsncImageProps) => {
  const [isLoadingImage, setIsLoadingImage] = useState(true);
  const handleLoadedImage = () => {
    setIsLoadingImage(false);
  };

  return (
    <>
      {(isLoadingImage || isLoading) && (
        <Spinner data-testid="async-image-spinner" />
      )}
      <NextImage
        onLoad={handleLoadedImage}
        className={clsx({
          'display-none': isLoadingImage,
        })}
        {...props}
      />
    </>
  );
};
