import { createContext, PropsWithChildren, useState, useContext } from "react";

interface FavouritesContextType {
  favourites: number[];
  addFavourite: (id: number) => void;
  removeFavourite: (id: number) => void;
  checkIsFavourite: (id: number) => boolean;
  toggleFavourite: (id: number) => void;
}

const FavouritesContext = createContext({} as FavouritesContextType);

export const FavouritesContextProvider = ({ children }: PropsWithChildren) => {
  const [favourites, setFavourites] = useState<number[]>([]);

  const addFavourite = (id: number) => {
    setFavourites([...favourites, id]);
  };

  const removeFavourite = (id: number) => {
    setFavourites(favourites.filter((favourite) => favourite !== id));
  };

  const checkIsFavourite = (id: number) => favourites.includes(id);

  const toggleFavourite = (id: number) => {
    if (checkIsFavourite(id)) {
      return removeFavourite(id);
    }

    addFavourite(id);
  };

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addFavourite,
        removeFavourite,
        checkIsFavourite,
        toggleFavourite,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavourites = () => useContext(FavouritesContext);
