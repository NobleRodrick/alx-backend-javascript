export default function iterateThroughObject(reportWithIterator) {
  let result_shown = '';

  for (const [index, item] of Object.entries(reportWithIterator)) {
    result_shown += `${item}`;

    if (parseInt(index) !== reportWithIterator.length - 1) {
      result_shown += ' | ';
    }
  }

  return result_shown;
}
