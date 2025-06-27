import DashboardCard from "@/components/dashboard/DashboardCard";
import {
  faBookOpen,
  faHandshake,
  faUserGraduate,
  faBoxOpen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Dashboard() {
  return (
    <div className="h-auto lg:h-screen w-full text-[var(--text)] bg-[rgba(95,0,191,0.1)] p-4">
      <div className="grid grid-cols-12 gap-4 h-auto lg:h-1/3 p-4">
        <DashboardCard
          icon={
            <FontAwesomeIcon
              icon={faBookOpen}
              className="text-white text-3xl bg-[var(--primary)] p-2 rounded-xl"
            />
          }
          title="Total de cursos"
          value={248}
        />
        <DashboardCard
          icon={
            <FontAwesomeIcon
              icon={faHandshake}
              className="text-white text-3xl bg-[var(--primary)] p-2 rounded-xl"
            />
          }
          title="Total de contratantes"
          value={92}
        />
        <DashboardCard
          icon={
            <FontAwesomeIcon
              icon={faUserGraduate}
              className="text-white text-3xl bg-[var(--primary)] p-2 rounded-xl"
            />
          }
          title="Alunos ativos"
          value="1.324"
        />
        <DashboardCard
          icon={
            <FontAwesomeIcon
              icon={faBoxOpen}
              className="text-white text-3xl bg-[var(--primary)] p-2 rounded-xl"
            />
          }
          title="Total de produtos"
          value={58}
        />
      </div>
    </div>
  );
}
