import { renderWithProviders } from '@/tests/utils';
import { getCharacterListMockResponse } from '@/tests';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { Header } from './Header';

const mockedSetShowFavourites = vi.fn();
const characters = getCharacterListMockResponse.results;

vi.mock('@/context', async () => {
  const actual = await vi.importActual('@/context');
  return {
    ...actual,
    useFavourites: () => ({
      favourites: characters,
      setShowFavourites: mockedSetShowFavourites,
      showFavourites: false,
    }),
  };
});

describe(`<${Header.name} />`, () => {
  it('should render without crashing', () => {
    const { asFragment } = renderWithProviders(<Header />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('Should should set show favourites in true', async () => {
    const { getByTestId } = renderWithProviders(<Header />);

    await userEvent.click(getByTestId('show-favourites'));
    expect(mockedSetShowFavourites).toHaveBeenCalledWith(true);
  });
  it('Should should set show favourites in false', async () => {
    const { getByTestId } = renderWithProviders(<Header />);

    await userEvent.click(getByTestId('logo'));
    expect(mockedSetShowFavourites).toHaveBeenCalledWith(false);
  });
});
