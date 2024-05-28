export default function appendToEachArrayValue(array, appendString) {
  const new_array = [];
  for (const item of array) {
    new_array.push(appendString + item);
  }

  return new_array;
}
