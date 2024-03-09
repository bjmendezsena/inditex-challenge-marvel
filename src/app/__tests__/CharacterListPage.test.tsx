import Router from "next/router";
import Page from "@/app/page";
import { vi } from "vitest";
import { renderWithProviders, waitFor } from "@/utils/testing";
import { getCharacterListMockResponse } from "@/config/tests";
import userEvent from "@testing-library/user-event";

vi.mock("next/link", () => ({
  __esModule: true, // Esto es necesario para simular correctamente un módulo ES6
  default: vi.fn().mockImplementation(({ children }) => children),
}));
describe(`<${Page.name} />`, () => {
  const getComponent = () => renderWithProviders(<Page />);

  it("should render with loading without crashing", async () => {
    const { asFragment, queryByText } = getComponent();

    await waitFor(() => expect(queryByText("Loading...")).toBeInTheDocument());

    expect(asFragment()).toMatchSnapshot();
  });

  it("should render without loading, with data and without crashing", async () => {
    const { asFragment, queryByText } = getComponent();

    await waitFor(() =>
      expect(
        queryByText(`${getCharacterListMockResponse.count} RESULTS`)
      ).toBeInTheDocument()
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it("should redirect to character page", async () => {
    const { findByText } = getComponent();
    const character = getCharacterListMockResponse.results[0];
    const card = await findByText(`${character.name}`);

    userEvent.click(card);


  });
});
