export interface Course {
  id: number;
  title: string;
  type: string;
  description: string;
  rating: number;
}

export interface Props {
  course: Course;
  currentRating: number;
  onRate: (stars: number) => void;
}