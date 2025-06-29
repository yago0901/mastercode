"use client";

import { CourseType } from '@/components/mocks/coursesMock/tipes';
import { CourseTypeFilterProps, types } from "./tipes";

export default function CourseTypeFilter({
  value,
  onChange,
}: CourseTypeFilterProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as CourseType | "all")}
      className="
    px-4 py-2 pr-10 rounded-lg border border-gray-300
    focus:outline-none focus:ring-2 focus:ring-primary
    text-[var(--text)] 
  "
    >
      {types.map((type) => (
        <option
          key={type}
          value={type}
          className="bg-[primary] text-black dark:bg-[#1a1a1a]"
        >
          {type === "all"
            ? "Todos os tipos"
            : type.charAt(0).toUpperCase() + type.slice(1)}
        </option>
      ))}
    </select>
  );
}
