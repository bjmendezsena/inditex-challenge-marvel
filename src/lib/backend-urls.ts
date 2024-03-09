import { urlBuilder } from '@/utils';

export const marvelApiUrls = urlBuilder('/public', {
  characters: urlBuilder('characters', {
    list: '',
    one: urlBuilder('%s', {
      get: '',
      comics: 'comics',
    }),
  }),
});
