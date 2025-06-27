"use client";

import { useState } from "react";
import { coursesMock } from "@/components/mocks/coursesMock";
import SearchBar from "@/components/courses/SearchBar";
import CourseCard from "@/components/courses/CourseCard";
import Pagination from "@/components/ui/Pagination";
import { filterCourses, getTotalPages, paginateCourses, perPage } from './util';
import { useCourseRatings } from '@/hooks/useCourseRatings';

export default function CoursesPage() {
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const { ratings, handleRating } = useCourseRatings();

  const filteredCourses = filterCourses(coursesMock, filter);
  const paginatedCourses = paginateCourses(
    filteredCourses,
    currentPage,
    perPage
  );
  const totalPages = getTotalPages(filteredCourses, perPage);

  return (
    <div className="h-full w-full text-[var(--text)] bg-[rgba(95,0,191,0.1)] p-4">
      <div className="h-[90%]">
        <div className="w-full md:w-4/4 mb-6 flex justify-end items-center gap-4">
          <SearchBar
            value={filter}
            onChange={(value) => {
              setFilter(value);
              setCurrentPage(1);
            }}
          />
        </div>

        <div className="grid grid-cols-12 gap-4 min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
          {paginatedCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              currentRating={ratings[course.id] ?? course.rating}
              onRate={(stars) => handleRating(course.id, stars)}
            />
          ))}
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onChange={setCurrentPage}
      />
    </div>
  );
}
