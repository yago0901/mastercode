import { coursesMock } from "@/components/mocks/coursesMock";
import api from '../axios';

export const getCourses = async () => {
  await new Promise((res) => setTimeout(res, 500));
  //await api.get("/courses")
  return coursesMock;
};