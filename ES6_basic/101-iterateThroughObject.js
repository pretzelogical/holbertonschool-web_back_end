export default function iterateThroughObject(report) {
  let empString = '';
  for (const emp of report) {
    empString += ` ${emp} |`;
  }
  return empString.substring(1, empString.length - 2);
}
