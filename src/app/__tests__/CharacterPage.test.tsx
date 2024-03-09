import Page from '@/app/[characterId]/page';
import { getCharacterMockResponse } from '@/tests';
import { renderWithProviders, waitFor } from '@/tests/utils';

const characterId = ':characterId';

const character = getCharacterMockResponse.results[0];

describe(`<${Page.name} />`, () => {
  const getComponent = () =>
    renderWithProviders(<Page params={{ characterId }} />);

  it('Should render with loading without crashing', async () => {
    const { asFragment, queryByText } = getComponent();

    await waitFor(() => {
      expect(queryByText(character.name)).toBeNull();
    });

    expect(asFragment()).toMatchSnapshot();
  });

  it('Should render without loading, with character data and without crashing', async () => {
    const { asFragment, findByText } = getComponent();

    const textFinded = await findByText(character.name);

    expect(textFinded).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot();
  });
});
