import { CourseType } from '@/components/mocks/coursesMock';

export interface CourseTypeFilterProps {
  value: CourseType | "all";
  onChange: (value: CourseType | "all") => void;
}

export const types: (CourseType | "all")[] = [
  "all",
  "frontend",
  "backend",
  "fullstack",
  "mobile",
  "devops",
];