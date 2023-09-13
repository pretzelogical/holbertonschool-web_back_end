export default function cleanSet(set, startString) {
  let cleanStr = '';
  if (startString === cleanStr) {
    return cleanStr;
  }
  set.forEach((s) => {
    if (s.startsWith(startString)) {
      cleanStr += `${s.replace(startString, '')}-`;
    }
  });
  return cleanStr.substring(0, cleanStr.length - 1);
}
