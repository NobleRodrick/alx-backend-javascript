export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    const task = true; //changed var to const
    const task2 = false; //changed var to let
  }

  return [task, task2];
}
