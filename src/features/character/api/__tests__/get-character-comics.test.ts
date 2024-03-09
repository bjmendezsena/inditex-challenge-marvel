import { getCharacterComicsMockResponse } from '@/tests';
import { getCharacterComics } from '../get-character-comics';

describe('getCharacterComics', () => {
  it('should return data', async () => {
    const data = await getCharacterComics(1);
    expect(data).toEqual(getCharacterComicsMockResponse);
  });
});
