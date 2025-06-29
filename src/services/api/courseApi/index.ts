import { coursesMock } from "@/components/mocks/coursesMock";

export const getCourses = async () => {
  await new Promise((res) => setTimeout(res, 500));
  //await api.get("/courses")
  return coursesMock;
};