export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((s) => s.location === city)
    .map((s) => {
      const newStudent = { ...s };
      const grade = newGrades.find((g) => g.studentId === s.id);
      if (grade !== undefined) {
        newStudent.grade = grade.grade;
      } else {
        newStudent.grade = 'N/A';
      }
      return newStudent;
    });
}
