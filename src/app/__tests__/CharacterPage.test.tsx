import Page from "@/app/[characterId]/page";

import {
  getCharacterMockResponse,
  getCharacterComicsMockResponse,
} from "@/config/tests";
import { renderWithProviders, waitFor } from "@/utils/testing";

const characterId = ":characterId";

const character = getCharacterMockResponse.results[0];
const comics = getCharacterComicsMockResponse.results;

describe(`<${Page.name} />`, () => {
  const getComponent = () =>
    renderWithProviders(<Page params={{ characterId }} />);

  it("Should render with loading without crashing", async () => {
    const { asFragment, getByTestId, findByText, getByText } = getComponent();

    await waitFor(() => {
      try {
        expect(findByText(character.name)).toBeInTheDocument();
      } catch (error) {

      }
    });

    expect(asFragment()).toMatchSnapshot();
  });

  it("Should render without loading, with character data and without crashing", async () => {
    const { asFragment, findByText } = getComponent();

    const textFinded = await findByText(character.name);

    expect(textFinded).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
