export interface IDashboardMetric {
  id: "courses" | "contractors" | "students" | "products";
  title: string;
  value: number | string;
}