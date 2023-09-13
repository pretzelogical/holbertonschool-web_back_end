export default function createIteratorObject(report) {
  const iterator = {
    [Symbol.iterator]() {
      let index = 0;
      const employees = [];
      Object.values(report.allEmployees).forEach((e) => {
        employees.push(...e);
      });
      return {
        next() {
          if (index < employees.length) {
            const emp = employees[index];
            index += 1;
            return { value: emp, done: false };
          }
          return { done: true };
        },
      };
    },
  };
  return iterator;
}
