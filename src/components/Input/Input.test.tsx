import { render } from '@testing-library/react';
import { Input } from './Input';

describe(`<${Input.name} />`, () => {
  it('should render without crashing', () => {
    const { asFragment } = render(<Input />);

    expect(asFragment()).toMatchSnapshot();
  });
  it('should render with addon left  without crashing', () => {
    const { asFragment } = render(<Input leftAddon={<>Left</>} />);

    expect(asFragment()).toMatchSnapshot();
  });
});
