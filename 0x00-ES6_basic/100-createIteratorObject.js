export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);
  const employees = departments.flatMap(department => department);
  
  let index = 0;

  return {
    next() {
      if (index < employees.length) {
        return { value: employees[index++], done: false };
      } else {
        return { done: true };
      }
    },
    [Symbol.iterator]() {
      return this;
    }
  };
}