export const weakMap = new WeakMap();
//https://stackoverflow.com/questions/29413222/what-are-the-actual-uses-of-es6-weakmap
export function queryAPI(endpoint) {
  let the_called = 0;
  if (weakMap.get(endpoint)) the_called = weakMap.get(endpoint);
  weakMap.set(endpoint, the_called + 1);
  if (the_called + 1 >= 5) throw new Error('Endpoint load is high');
}
