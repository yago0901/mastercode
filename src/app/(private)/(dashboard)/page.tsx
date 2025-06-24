import {
  faBookOpen,
  faHandshake,
  faUserGraduate,
  faBoxOpen,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Dashboard() {
  return (
    <div className="h-auto lg:h-screen w-full text-[var(--text)] bg-[rgba(95,0,191,0.1)] p-4">
      <div className="grid grid-cols-12 gap-4 h-auto lg:h-1/3">

        <div className="col-span-12 md:col-span-6 lg:col-span-3 min-h-[200px] rounded-[20px] bg-[linear-gradient(to_top_right,var(--secondary-rgba),var(--primary-rgba))] p-6 flex flex-col justify-between shadow-md transition-transform hover:scale-[1.02]">
          <div className="w-11/12 mx-auto flex items-center justify-between gap-4 px-4 py-2 rounded-lg">
            <FontAwesomeIcon icon={faBookOpen} className="text-white text-3xl bg-[var(--primary)] p-2 rounded-xl" />
            <h3 className="text-lg font-semibold text-primary">Total de cursos</h3>
          </div>
          <div className="h-full flex items-center justify-center text-6xl text-primary font-semibold">
            248
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-3 min-h-[200px] rounded-[20px] bg-[linear-gradient(to_top_right,var(--secondary-rgba),var(--primary-rgba))] p-6 flex flex-col justify-between shadow-md transition-transform hover:scale-[1.02]">
          <div className="w-11/12 mx-auto flex items-center justify-between gap-4 px-4 py-2 rounded-lg">
            <FontAwesomeIcon icon={faHandshake} className="text-white text-4xl bg-[var(--primary)] p-2 rounded-xl" />
            <h3 className="text-lg font-semibold text-primary">Total de contratantes</h3>
          </div>
          <div className="h-full flex items-center justify-center text-6xl text-primary font-semibold">
            92
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-3 min-h-[200px] rounded-[20px] bg-[linear-gradient(to_top_right,var(--secondary-rgba),var(--primary-rgba))] p-6 flex flex-col justify-between shadow-md transition-transform hover:scale-[1.02]">
          <div className="w-11/12 mx-auto flex items-center justify-between gap-4 px-4 py-2 rounded-lg">
            <FontAwesomeIcon icon={faUserGraduate} className="text-white text-4xl bg-[var(--primary)] p-2 rounded-xl" />
            <h3 className="text-lg font-semibold text-primary">Alunos ativos</h3>
          </div>
          <div className="h-full flex items-center justify-center text-6xl text-primary font-semibold">
            1.324
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-3 min-h-[200px] rounded-[20px] bg-[linear-gradient(to_top_right,var(--secondary-rgba),var(--primary-rgba))] p-6 flex flex-col justify-between shadow-md transition-transform hover:scale-[1.02]">
          <div className="w-11/12 mx-auto flex items-center justify-between gap-4 px-4 py-2 rounded-lg">
            <FontAwesomeIcon icon={faBoxOpen} className="text-white text-4xl bg-[var(--primary)] p-2 rounded-xl" />
            <h3 className="text-lg font-semibold text-primary">Total de produtos</h3>
          </div>
          <div className="h-full flex items-center justify-center text-6xl text-primary font-semibold">
            58
          </div>
        </div>
      </div>
    </div>
  );
}
