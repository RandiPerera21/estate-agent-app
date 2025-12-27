import { useContext } from "react";
import { FavouritesContext } from "../context/FavouritesContext";

export default function Favourites() {
  const { favourites, removeFavourite, clearFavourites } =
    useContext(FavouritesContext);

  return (
    <div className="favourites-box">
      <h3>Favourites</h3>

      <button className="clear-btn" onClick={clearFavourites}>
        CLEAR FAVOURITES
      </button>

      {favourites.length === 0 && <p>No favourites yet</p>}

      {favourites.map(p => (
        <div key={p.id} className="fav-card">
          <img
            src={`/images/properties/p${p.id}/1.jpg`}
            alt=""
          />
          <div>
            <p>Rs. {p.price} millions</p>
            <button onClick={() => removeFavourite(p.id)}>🗑</button>
          </div>
        </div>
      ))}
    </div>
  );
}
