export default function getStudentsByLocation(students, location) {
  return students.filter((s) => s.location === location);
}
