export default function cleanSet(set, startString) {
  let cleanStr = '';
  if (typeof startString !== 'string') {
    return cleanStr;
  }
  if (startString === cleanStr) {
    return cleanStr;
  }
  set.forEach((s) => {
    if (typeof s === 'string' && s.startsWith(startString)) {
      cleanStr += `${s.replace(startString, '')}-`;
    }
  });
  return cleanStr.substring(0, cleanStr.length - 1);
}
