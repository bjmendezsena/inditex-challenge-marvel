import _merge from 'lodash/merge';
import { render } from '@/tests/utils';
import { FavButton, FavButtonProps } from './FavButton';

const defaultProps: FavButtonProps = {
  isActive: true,
};

describe(`<${FavButton.name} />`, () => {
  const getComponent = (props: Partial<FavButtonProps> = {}) => {
    return render(<FavButton {..._merge(defaultProps, props)} />);
  };
  it('should render without crashing', () => {
    const { asFragment } = getComponent();

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render with isActive', () => {
    const { asFragment } = getComponent({ isActive: true });

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render without isActive', () => {
    const { asFragment } = getComponent({ isActive: false });

    expect(asFragment()).toMatchSnapshot();
  });

  
});
