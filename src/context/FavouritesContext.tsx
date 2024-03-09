import {
  createContext,
  PropsWithChildren,
  useState,
  useContext,
  useCallback,
} from 'react';
import { Character } from '@/types';
import _isEqual from 'lodash/isEqual';
interface FavouritesContextType {
  favourites: Character[];
  addFavourite: (character: Character) => void;
  removeFavourite: (character: Character) => void;
  checkIsFavourite: (character: Character) => boolean;
  toggleFavourite: (character: Character) => void;
  setShowFavourites: (value: boolean) => void;
  showFavourites: boolean;
}

const FavouritesContext = createContext({} as FavouritesContextType);

export const FavouritesContextProvider = ({ children }: PropsWithChildren) => {
  const [favourites, setFavourites] = useState<Character[]>([]);

  const [showFavourites, setShowFavourites] = useState(false);

  const addFavourite = (character: Character) => {
    setFavourites([...favourites, character]);
  };

  const removeFavourite = (character: Character) => {
    setFavourites(
      favourites.filter(favourite => !_isEqual(favourite, character))
    );
  };

  const checkIsFavourite = useCallback(
    (character: Character) =>
      favourites.some(favourite => _isEqual(favourite, character)),
    [favourites]
  );

  const toggleFavourite = (character: Character) => {
    if (checkIsFavourite(character)) {
      return removeFavourite(character);
    }

    addFavourite(character);
  };

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addFavourite,
        removeFavourite,
        checkIsFavourite,
        toggleFavourite,
        showFavourites,
        setShowFavourites,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavourites = () => useContext(FavouritesContext);
