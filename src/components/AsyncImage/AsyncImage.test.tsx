import _merge from 'lodash/merge';
import { render } from '@/tests/utils';
import { AsyncImage, AsncImageProps } from './AsyncImage';

const defaultProps: AsncImageProps = {
  src: 'https://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
  alt: 'test',
  width: 100,
  height: 100,
};

describe(`<${AsyncImage.name} />`, () => {
  const getComponent = (props: Partial<AsncImageProps> = {}) =>
    render(<AsyncImage {..._merge(defaultProps, props)} />);
  it('should render without crashing', () => {
    const { asFragment } = getComponent();

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render with isLoading', () => {
    const { asFragment, getByTestId } = getComponent({ isLoading: true });

    expect(asFragment()).toMatchSnapshot();

    expect(getByTestId('async-image-spinner')).toBeInTheDocument();
  });
});
