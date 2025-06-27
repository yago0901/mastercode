import { ICourse } from '@/components/mocks/coursesMock';

export const perPage = 8;

export function filterCourses(courses: ICourse[], filter: string) {
  return courses.filter((course) =>
    course.title.toLowerCase().includes(filter.toLowerCase())
  );
}

export function paginateCourses(courses: ICourse[], page: number, perPage: number) {
  const start = (page - 1) * perPage;
  return courses.slice(start, start + perPage);
}

export function getTotalPages(filteredCourses: ICourse[], perPage: number) {
  return Math.ceil(filteredCourses.length / perPage);
}
