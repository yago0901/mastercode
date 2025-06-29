export default function DashboardCardSkeleton() {
  return (
    <div className="col-span-12 lg:col-span-6 xl:col-span-3 min-h-[200px] rounded-[20px] bg-[linear-gradient(to_top_right,var(--secondary-rgba),var(--primary-rgba))] p-6 flex flex-col justify-between shadow-md animate-pulse">
      <div className="w-11/12 mx-auto flex items-center justify-between gap-4 px-4 py-2 rounded-lg">
        <div className="w-10 h-10 bg-gray-300 rounded-xl" />
        <div className="h-6 bg-gray-300 rounded w-2/3" />
      </div>
      <div className="h-full flex items-center justify-center">
        <div className="h-10 w-24 bg-gray-300 rounded" />
      </div>
    </div>
  );
}