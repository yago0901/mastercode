import { DashboardCardProps } from './tipes';

export default function DashboardCard({ icon, title, value }: DashboardCardProps) {
  return (
    <div className="col-span-12 lg:col-span-6 xl:col-span-3 min-h-[200px] rounded-[20px] bg-[linear-gradient(to_top_right,var(--secondary-rgba),var(--primary-rgba))] p-6 flex flex-col justify-between shadow-md transition-transform hover:scale-[1.02]">
      <div className="w-11/12 mx-auto flex items-center justify-between gap-4 px-4 py-2 rounded-lg">
        {icon}
        <h3 className="text-2xl font-semibold text-primary">{title}</h3>
      </div>
      <div className="h-full flex items-center justify-center text-6xl text-primary font-semibold">
        {value}
      </div>
    </div>
  );
}