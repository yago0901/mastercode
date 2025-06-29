import { dashboardMock } from '@/components/mocks/dashboardMock';
import { IDashboardMetric } from '@/components/mocks/dashboardMock/tipes';

export async function getDashboardMetrics(): Promise<IDashboardMetric[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dashboardMock);
    }, 500);
  });
}