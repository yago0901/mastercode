import { coursesMock } from "@/components/mocks/coursesMock";
import { IVideo } from "@/components/mocks/coursesMock/tipes";

export const getCourseVideos = async (courseId: number): Promise<IVideo[]> => {
  await new Promise((res) => setTimeout(res, 500));

  const course = coursesMock.find((c) => c.id === courseId);

  return course?.videos ?? [];
};