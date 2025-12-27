export function filterProperties(properties, criteria) {
    return properties.filter(p => {
      return (
        (!criteria.type || criteria.type === "any" || p.type === criteria.type) &&
        (!criteria.minPrice || p.price >= criteria.minPrice) &&
        (!criteria.maxPrice || p.price <= criteria.maxPrice) &&
        (!criteria.minBeds || p.bedrooms >= criteria.minBeds) &&
        (!criteria.maxBeds || p.bedrooms <= criteria.maxBeds) &&
        (!criteria.postcode || p.postcode.startsWith(criteria.postcode)) &&
        (!criteria.startDate || new Date(p.dateAdded) >= new Date(criteria.startDate)) &&
        (!criteria.endDate || new Date(p.dateAdded) <= new Date(criteria.endDate))
      );
    });
  }
  