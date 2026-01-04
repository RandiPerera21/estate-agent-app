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

  // Drag and Drop handlers
  const handleDragStart = (e) => {
    e.dataTransfer.setData("property", JSON.stringify(property));
    e.dataTransfer.effectAllowed = "copy";
    e.currentTarget.style.opacity = "0.5";
  };

  const handleDragEnd = (e) => {
    e.currentTarget.style.opacity = "1";
  };

  return (
    <div 
      className="property-card"
      draggable="true"
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      style={{ cursor: 'grab' }}
    >
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
            title={favourite ? "Remove from favourites" : "Add to favourites"}
          >
            {favourite ? "♥" : "♡"}
          </button>
        </div>
      </div>
    </div>
  );
}