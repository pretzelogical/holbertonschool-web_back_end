export default function createIteratorObject(report) {
  let i = 0;
  report.prototype.iter;
  iter.prototype[Symbol.iterator] = function () {
    return this;
  };
  return iter;
};
