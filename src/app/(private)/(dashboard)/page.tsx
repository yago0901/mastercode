"use client";

import DashboardCard from "@/components/dashboard/DashboardCard";
import DashboardCardSkeleton from '@/components/dashboard/DashboardCard/skeleton';
import { IDashboardMetric } from "@/components/mocks/dashboardMock/tipes";
import { getDashboardMetrics } from "@/services/api/dashboardApi/indes";
import { faBookOpen, faHandshake, faUserGraduate, faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import { JSX } from "react";

export default function Dashboard() {
  const { data: metrics, isLoading, isError } = useQuery({ queryKey: ["dashboard"], queryFn: getDashboardMetrics });

  const iconMap: Record<IDashboardMetric["id"], JSX.Element> = {
    courses: <FontAwesomeIcon icon={faBookOpen} className="text-white text-3xl bg-[var(--primary)] p-2 rounded-xl" />,
    contractors: (
      <FontAwesomeIcon icon={faHandshake} className="text-white text-3xl bg-[var(--primary)] p-2 rounded-xl" />
    ),
    students: (
      <FontAwesomeIcon icon={faUserGraduate} className="text-white text-3xl bg-[var(--primary)] p-2 rounded-xl" />
    ),
    products: <FontAwesomeIcon icon={faBoxOpen} className="text-white text-3xl bg-[var(--primary)] p-2 rounded-xl" />,
  };

  if (isLoading) {
    return (
      <div className="h-auto lg:h-screen w-full text-[var(--text)] bg-[rgba(95,0,191,0.1)] p-4">
        <div className="grid grid-cols-12 gap-4 h-auto lg:h-1/3 p-4">
          {[...Array(4)].map((_, i) => (
            <DashboardCardSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  if (isError || !metrics) {
    return <div>Erro ao carregar métricas</div>;
  }

  return (
    <div className="h-auto lg:h-screen w-full text-[var(--text)] bg-[rgba(95,0,191,0.1)] p-4">
      <div className="grid grid-cols-12 gap-4 h-auto lg:h-1/3 p-4">
        {metrics.map((metric) => (
          <DashboardCard
            key={metric.id}
            icon={iconMap[metric.id]}
            title={metric.title}
            value={metric.value}
          />
        ))}
      </div>
    </div>
  );
}
