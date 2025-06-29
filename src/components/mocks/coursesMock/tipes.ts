export interface IVideo {
  id: string;
  name: string;
  url: string;
  description: string;
}

export type CourseType =
  | "frontend"
  | "backend"
  | "fullstack"
  | "mobile"
  | "devops";

export interface ICourse {
  id: number;
  title: string;
  description: string;
  rating: number;
  type: CourseType;
  videos: IVideo[];
}
