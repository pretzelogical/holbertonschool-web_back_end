export default function hasValuesFromArray(set, array) {
  let hasValues = true;
  array.forEach((e) => {
    if (!set.has(e)) {
      hasValues = false;
    }
  });
  return hasValues;
}
