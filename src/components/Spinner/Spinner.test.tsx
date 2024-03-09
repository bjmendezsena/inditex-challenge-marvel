import { render } from '@testing-library/react';
import { Spinner } from './Spinner';

describe(`<${Spinner.name} />`, () => {
  it('should render without crashing', () => {
    const { asFragment } = render(<Spinner />);

    expect(asFragment()).toMatchSnapshot();
  });
});
