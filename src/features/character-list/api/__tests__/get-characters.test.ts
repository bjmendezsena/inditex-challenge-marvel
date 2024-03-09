import { getCharacterListMockResponse } from '@/tests';
import { getCharacters } from '../get-characters';

describe('getCharacters', () => {
  it('should return data', async () => {
    const data = await getCharacters({ nameStartsWith: 'test' });
    expect(data).toEqual(getCharacterListMockResponse);
  });
});
