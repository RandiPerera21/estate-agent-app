import { useContext } from "react";
import { FavouritesContext } from "../context/FavouritesContext";

export default function Favourites() {
  const { favourites, removeFavourite, clearFavourites } =
    useContext(FavouritesContext);

  return (
    <div className="favourites">
      <h3>Saved Properties</h3>

      {favourites.length === 0 && <p>No favourites yet</p>}

      <ul>
        {favourites.map(p => (
          <li key={p.id}>
            £{p.price.toLocaleString()}
            <button onClick={() => removeFavourite(p.id)}>✖</button>
          </li>
        ))}
      </ul>

      {favourites.length > 0 && (
        <button className="clear" onClick={clearFavourites}>
          Clear All
        </button>
      )}
    </div>
  );
}
