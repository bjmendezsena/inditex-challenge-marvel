
import { render } from "@testing-library/react";
import { FavButton, FavButtonProps } from "./FavButton";

const defaultProps: FavButtonProps = {
  isActive: true,
};

describe(`<${FavButton.name} />`, () => {
  const getComponent = (props: Partial<FavButtonProps> = {}) => {
    const allProps = { ...defaultProps, ...props };
    return render(<FavButton {...allProps} />);
  };
  it("should render without crashing", () => {
    const { asFragment } = getComponent();

    expect(asFragment()).toMatchSnapshot();
  });

  it("should render with isActive", () => {
    const { asFragment } = getComponent({ isActive: true });

    expect(asFragment()).toMatchSnapshot();
  });

  it("should render without isActive", () => {
    const { asFragment } = getComponent({ isActive: false });

    expect(asFragment()).toMatchSnapshot();
  });
});
