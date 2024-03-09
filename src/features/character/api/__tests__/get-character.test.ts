import { getCharacterMockResponse } from '@/tests';
import { getCharacter } from '../get-character';

describe('getCharacter', () => {
  it('should return data', async () => {
    const data = await getCharacter(1);
    expect(data).toEqual(getCharacterMockResponse.results[0]);
  });
});
