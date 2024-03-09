import userEvent from '@testing-library/user-event';
import { render, waitFor, getHtml } from '@/tests/utils';
import { getCharacterListMockResponse } from '@/tests';
import { Character } from '@/types';
import { FavouritesContextProvider, useFavourites } from './FavouritesContext';
type TestComponentProps = {
  testCharacter: Character;
};

describe('FavouritesContext', () => {
  const characters = getCharacterListMockResponse.results;
  const TestComponent = ({ testCharacter }: TestComponentProps) => {
    const { favourites, addFavourite, removeFavourite } = useFavourites();

    const handleAddFavourite = () => {
      addFavourite(testCharacter);
    };

    const handleRemoveFavourite = () => {
      removeFavourite(testCharacter);
    };

    return (
      <>
        <div>{favourites.length}</div>
        <div>{JSON.stringify(favourites)}</div>
        <button onClick={handleAddFavourite}>Add Favourite</button>
        <button onClick={handleRemoveFavourite}>Remove Favourite</button>
      </>
    );
  };
  const getComponent = (props: TestComponentProps) =>
    render(
      <FavouritesContextProvider>
        <TestComponent {...props} />
      </FavouritesContextProvider>
    );

  it('should render', () => {
    const { container } = getComponent({ testCharacter: characters[0] });
    expect(container).toMatchSnapshot();
  });

  it('should add and remove favourite', async () => {
    const character = characters[0];
    const { getByText, container } = getComponent({ testCharacter: character });

    await userEvent.click(getByText('Add Favourite'));

    await waitFor(() => expect(getByText('1')).toBeInTheDocument());

    const htmlString = getHtml(container);

    expect(htmlString).toContain(JSON.stringify(character));

    await userEvent.click(getByText('Remove Favourite'));

    await waitFor(() => expect(getByText('0')).toBeInTheDocument());
  });
});
