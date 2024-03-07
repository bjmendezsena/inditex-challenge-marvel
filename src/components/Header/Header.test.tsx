import { render } from "@testing-library/react";
import { Header } from "./Header";

describe(`<${Header.name} />`, () => {
  it("should render without crashing", () => {
    const { asFragment } = render(<Header />);

    expect(asFragment()).toMatchSnapshot();
  });
});
