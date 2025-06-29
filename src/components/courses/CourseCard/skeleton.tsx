export default function CourseCardSkeleton() {
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 min-h-[280px] max-h-[280px] rounded-[20px] bg-gradient-to-tr from-[var(--secondary-rgba)] to-[var(--primary-rgba)] p-6 flex flex-col justify-between shadow-md animate-pulse">
      <div>
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-2" />
        <div className="h-4 bg-gray-300 rounded w-1/3 mb-2" />
        <div className="h-4 bg-gray-300 rounded w-full" />
      </div>
      <div className="w-full mt-4 flex flex-col items-center gap-4">
        <div className="flex gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="w-5 h-5 bg-gray-300 rounded-full" />
          ))}
        </div>
        <div className="h-10 w-full bg-gray-300 rounded-xl" />
      </div>
    </div>
  );
}
