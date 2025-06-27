'use client'

import { useState } from "react";

export function useCourseRatings() {
  const [ratings, setRatings] = useState<Record<number, number>>({});

  const handleRating = (courseId: number, stars: number) => {
    setRatings((prev) => ({ ...prev, [courseId]: stars }));
  };

  return { ratings, handleRating };
}
