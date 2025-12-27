import { createContext, useState } from "react";

export const FavouritesContext = createContext();

export function FavouritesProvider({ children }) {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = p => {
    if (!favourites.find(f => f.id === p.id)) {
      setFavourites([...favourites, p]);
    }
  };

  const removeFavourite = id => {
    setFavourites(favourites.filter(f => f.id !== id));
  };

  const clearFavourites = () => setFavourites([]);

  return (
    <FavouritesContext.Provider
      value={{ favourites, addFavourite, removeFavourite, clearFavourites }}
    >
      {children}
    </FavouritesContext.Provider>
  );
}
