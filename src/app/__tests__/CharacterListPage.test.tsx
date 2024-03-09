import Page from '@/app/page';
import { renderWithProviders, waitFor } from '@/tests/utils';
import { getCharacterListMockResponse } from '@/tests';

describe(`<${Page.name} />`, () => {
  const getComponent = () => renderWithProviders(<Page />);

  it('should render with loading without crashing', async () => {
    const { asFragment, queryByText } = getComponent();

    await waitFor(() => expect(queryByText('Loading...')).toBeInTheDocument());

    expect(asFragment()).toMatchSnapshot();
  });

  it('should render without loading, with data and without crashing', async () => {
    const { asFragment, queryByText } = getComponent();

    await waitFor(() =>
      expect(
        queryByText(`${getCharacterListMockResponse.count} RESULTS`)
      ).toBeInTheDocument()
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
