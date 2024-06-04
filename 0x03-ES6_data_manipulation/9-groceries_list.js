export default function groceriesList() {
  const final_map = new Map();
  const obj = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
  //   get all the keys in the object into an array
  const list = Array.from(Object.keys(obj));

  //   map through the array and for each item, set the value to the key in the final_map
  list.map((item) => final_map.set(item, obj[item]));
  return final_map;
}
