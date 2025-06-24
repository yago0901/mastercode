
export default function Dashboard() {
  return (
    <div className="h-auto lg:h-screen w-full text-[var(--text)] bg-[rgba(95,0,191,0.1)] p-4">
      <div className="grid grid-cols-12 gap-4 h-auto lg:h-1/3">
        <div className="col-span-12 md:col-span-6 lg:col-span-3 min-h-[200px] rounded-[20px] bg-[linear-gradient(to_top_right,var(--secondary-rgba),var(--primary-rgba))] p-4">
          Total de cursos
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3 min-h-[200px] rounded-[20px] bg-[linear-gradient(to_top_right,var(--secondary-rgba),var(--primary-rgba))] p-4">
          Total de contratantes
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3 min-h-[200px] rounded-[20px] bg-[linear-gradient(to_top_right,var(--secondary-rgba),var(--primary-rgba))] p-4">
          Total de alunos ativos
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3 min-h-[200px] rounded-[20px] bg-[linear-gradient(to_top_right,var(--secondary-rgba),var(--primary-rgba))] p-4">
           Total de produtos
        </div>
      </div>
    </div>
  );
}
