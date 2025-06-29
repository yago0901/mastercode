"use client";

import { useState } from "react";
import SearchBar from "@/components/courses/SearchBar";
import CourseCard from "@/components/courses/CourseCard";
import Pagination from "@/components/ui/Pagination";
import { filterCourses, getTotalPages, paginateCourses, perPage } from "./util";
import { useCourseRatings } from "@/hooks/useCourseRatings";
import { useQuery } from "@tanstack/react-query";
import { getCourses } from "@/services/api/courseApi";
import CourseTypeFilter from "@/components/courses/CourseTypeFilter";
import { CourseType } from "@/components/mocks/coursesMock/tipes";
import CourseCardSkeleton from '@/components/courses/CourseCard/skeleton';

export default function CoursesPage() {
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { ratings, handleRating } = useCourseRatings();
  const [selectedType, setSelectedType] = useState<CourseType | "all">("all");

  const {
    data: courses,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: getCourses,
  });

  if (isLoading) {
    return (
      <div className="h-full w-full text-[var(--text)] bg-[rgba(95,0,191,0.1)] p-4">
        <div className="w-full md:w-4/4 mb-6 flex justify-end items-center gap-4">
          <CourseTypeFilter value={selectedType} onChange={setSelectedType} />
          <SearchBar value={filter} onChange={setFilter} />
        </div>
        <div className="grid grid-cols-12 gap-4 min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
          {[...Array(8)].map((_, i) => (
            <CourseCardSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }
  if (isError || !courses) return <div>Erro ao carregar cursos</div>;

  const filteredCourses = filterCourses(
    courses.filter((c) => selectedType === "all" || c.type === selectedType),
    filter
  );

  const paginatedCourses = paginateCourses(filteredCourses, currentPage, perPage);
  const totalPages = getTotalPages(filteredCourses, perPage);

  return (
    <div className="h-full w-full text-[var(--text)] bg-[rgba(95,0,191,0.1)] p-4">
      <div className="h-[85%]">
        <div className="w-full md:w-4/4 mb-6 flex justify-end items-center gap-4">
          <CourseTypeFilter
            value={selectedType}
            onChange={(value) => {
              setSelectedType(value);
              setCurrentPage(1);
            }}
          />
          <SearchBar
            value={filter}
            onChange={(value) => {
              setFilter(value);
              setCurrentPage(1);
            }}
          />
        </div>

        <div className="grid grid-cols-12 gap-4 h-[90%] min-h-[300px] md:min-h-[400px] lg:min-h-[500px] overflow-auto">
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

      <Pagination currentPage={currentPage} totalPages={totalPages} onChange={setCurrentPage} />
    </div>
  );
}
