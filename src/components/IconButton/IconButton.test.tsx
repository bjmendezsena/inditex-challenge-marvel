import { render } from '@/tests/utils';
import { FavIcon } from '@/components';
import { IconButton } from './IconButton';

describe(`<${IconButton.name} />`, () => {
  it('should render', () => {
    const { container } = render(
      <IconButton>
        <FavIcon />
      </IconButton>
    );
    expect(container).toMatchSnapshot();
  });
});
