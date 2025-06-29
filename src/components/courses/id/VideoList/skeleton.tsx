export default function VideoListSkeleton() {
  return (
    <ul className="flex flex-col gap-4 overflow-y-auto pr-2 h-full">
      {[...Array(4)].map((_, i) => (
        <li
          key={i}
          className="bg-[var(--card-bg-rgba)] rounded-xl shadow-md p-4 flex flex-col gap-2 animate-pulse"
        >
          <div className="h-4 w-3/4 bg-gray-300 rounded" />
          <div className="h-3 w-full bg-gray-300 rounded" />
          <div className="h-3 w-5/6 bg-gray-300 rounded" />
        </li>
      ))}
    </ul>
  );
}