export function searchItems(keyword, data) {
  if (!keyword) return [];

  return data.filter(item =>
    item.name.toLowerCase().includes(keyword.toLowerCase()) ||
    item.type.toLowerCase().includes(keyword.toLowerCase())
  );
}
