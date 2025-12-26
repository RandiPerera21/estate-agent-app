import { useParams } from "react-router-dom";
import data from "../data/properties.json";

export default function PropertyPage() {
  const { id } = useParams();
  const property = data.find(p => p.id === Number(id));

  return (
    <div className="property-page">
      <h1>{property.location}</h1>
      <img
        src={`/images/properties/p${property.id}/1.jpg`}
        className="hero-img"
      />

      <div className="tabs">
        <button>Description</button>
        <button>Floor Plan</button>
        <button>Map</button>
      </div>

      <div className="tab-content">
        <p>{property.shortDesc}</p>
        <p>£{property.price.toLocaleString()}</p>
      </div>
    </div>
  );
}
