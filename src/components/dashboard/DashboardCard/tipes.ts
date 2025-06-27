import { ReactNode } from 'react';

export interface DashboardCardProps {
  icon: ReactNode;
  title: string;
  value: string | number;
}