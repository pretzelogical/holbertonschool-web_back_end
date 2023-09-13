export default function getListStudentIds(students) {
  if (!(students instanceof Array)) {
    return [];
  }
  return students.map((s) => s.id);
}
