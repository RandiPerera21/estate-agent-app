export function filterProperties(properties, searchTerm) {
  if (!searchTerm.trim()) return properties;

  const term = searchTerm.toLowerCase();

  return properties.filter((property) =>
    property.location?.toLowerCase().includes(term) ||
    property.area?.toLowerCase().includes(term) ||
    property.postcode?.toLowerCase().includes(term) ||
    property.type?.toLowerCase().includes(term)
  );
}
