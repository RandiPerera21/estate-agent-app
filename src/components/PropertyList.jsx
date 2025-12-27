import PropertyCard from "./PropertyCard";

export default function PropertyList({ properties }) {
  return (
    <div className="property-grid">
      {properties.map((p, index) => (
        <PropertyCard key={`${p.id}-${index}`} property={p} />
       ))}

    </div>
    
  );
}
