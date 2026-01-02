import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavouritesContext } from "../context/FavouritesContext";

export default function PropertyCard({ property }) {
  const { addFavourite, removeFavourite, isFavourite } =
    useContext(FavouritesContext);

  const favourite = isFavourite(property.id);

  const toggleFavourite = () => {
    favourite
      ? removeFavourite(property.id)
      : addFavourite(property);
  };

  return (
    <div className="property-card">
      <img
        src={`/images/properties/p${property.id}/1.jpg`}
        alt={property.location}
      />

      <div className="property-body">
        <p className="price">Rs. {property.price} million</p>
        <p className="short-desc">{property.shortDesc}</p>

        <div className="property-actions">
          <Link to={`/property/${property.id}`} className="details-btn">
            VIEW DETAILS
          </Link>

          <button
            className={`fav-btn ${favourite ? "active" : ""}`}
            onClick={toggleFavourite}
          >
            {favourite ? "♥" : "♡"}
          </button>
        </div>
      </div>
    </div>
  );
}
