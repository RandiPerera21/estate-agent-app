import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavouritesContext } from "../context/FavouritesContext";

export default function PropertyCard({ property }) {
  const { addFavourite } = useContext(FavouritesContext);

  return (
    <div className="card">
      <img src={`/images/properties/p${property.id}/1.jpg`} alt="" />

      <div className="card-body">
        <h3>£{property.price.toLocaleString()}</h3>
        <p>{property.shortDesc}</p>
        <p>{property.bedrooms} bedrooms • {property.postcode}</p>

        <div className="card-actions">
          <Link to={`/property/${property.id}`}>View Details</Link>
          <button onClick={() => addFavourite(property)}>❤</button>
        </div>
      </div>
    </div>
  );
}
