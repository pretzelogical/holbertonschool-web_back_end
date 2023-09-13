export default function updateUniqueItems(map) {
  const quantity = [];
  if (!(map instanceof Map)) {
    throw new Error('Cannot proccss');
  }
  map.forEach((value, key) => {
    if (value === 1) {
      quantity.push(key);
    }
  });
  quantity.forEach((q) => map.set(q, 100));
}
