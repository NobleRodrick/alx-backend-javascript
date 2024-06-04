/* eslint-disable array-callback-return */
export default function hasValuesFromArray(set, list) {
  let whats_it = true;
  list.map((x) => {
    if (!set.has(x)) {
      whats_it = false;
    }
  });

  return whats_it;
}
