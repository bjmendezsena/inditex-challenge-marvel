import { Thumbnail } from '@/types';

export function buildThumbnailImage(thumbnail: Thumbnail) {
  const { extension, path } = thumbnail;
  return `${path.replace('http', 'https')}.${extension}`;
}
