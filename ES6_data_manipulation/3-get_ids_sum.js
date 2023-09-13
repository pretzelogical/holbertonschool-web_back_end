import getListStudentIds from './1-get_list_student_ids';

export default function getStudentIdsSum(students) {
  return getListStudentIds(students).reduce(
    (previous, current) => previous + current, 0,
  );
}
