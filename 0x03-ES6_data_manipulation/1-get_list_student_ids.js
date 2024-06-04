export default function getListStudentIds(object_array) {
  if (Array.isArray(object_array)) {
    return object_array.map((obj) => obj.id);
  }
  return [];
}
