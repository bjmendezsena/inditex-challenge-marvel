import { render } from '@/tests/utils';
import { FavIcon, MagnifyingGlassIcon } from '../';

describe('Icon', () => {
  it('should render FavIcon', () => {
    const { container } = render(<FavIcon />);
    expect(container).toMatchSnapshot();
  });
  it('should render MagnifyingGlassIcon', () => {
    const { container } = render(<MagnifyingGlassIcon />);
    expect(container).toMatchSnapshot();
  });
});
