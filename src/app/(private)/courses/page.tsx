'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar as fullStar,
  faPlayCircle,
  faMagnifyingGlass,
  faChevronLeft,
  faAnglesLeft,
  faChevronRight,
  faAnglesRight
} from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';

type Course = {
  id: number;
  name: string;
  description: string;
};

const mockCourses: Course[] = Array.from({ length: 204 }).map((_, i) => ({
  id: i + 1,
  name: `Curso ${i + 1}`,
  description: 'Descrição breve do curso com tópicos principais abordados.',
}));

export default function Page() {
  const router = useRouter();
  const [filter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [ratings, setRatings] = useState<Record<number, number>>({});
  const perPage = 8;

  const filteredCourses = mockCourses.filter(course =>
    course.name.toLowerCase().includes(filter.toLowerCase())
  );

  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  const totalPages = Math.ceil(filteredCourses.length / perPage);

  const handleRating = (courseId: number, stars: number) => {
    setRatings(prev => ({ ...prev, [courseId]: stars }));
    // Aqui você poderia também salvar a avaliação via API
  };

  return (
    <div className="h-auto min-h-screen w-full text-[var(--text)] bg-[rgba(95,0,191,0.1)] p-4">

      <div className="w-full mb-6 flex justify-end items-center gap-4">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Filtrar por nome do curso..."
            value={filter}
            onChange={e => {
              setFilter(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full px-4 py-2 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
        {paginatedCourses.map(course => (
          <div
            key={course.id}
            className="col-span-12 md:col-span-6 lg:col-span-3 min-h-[250px] max-h-[250px] rounded-[20px] bg-[linear-gradient(to_top_right,var(--secondary-rgba),var(--primary-rgba))] p-6 flex flex-col justify-between shadow-md transition-transform hover:scale-[1.02]"
          >
            <div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                {course.name}
              </h3>
              <p className="text-sm text-[var(--text)]">{course.description}</p>
            </div>
            <div className="w-full mt-4 flex flex-col items-center gap-4">
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map(star => (
                  <FontAwesomeIcon
                    key={star}
                    icon={star <= (ratings[course.id] || 0) ? fullStar : emptyStar}
                    onClick={() => handleRating(course.id, star)}
                    className="text-yellow-500 text-2xl cursor-pointer transition-transform hover:scale-125 drop-shadow"
                  />
                ))}
              </div>
              <button
                onClick={() => router.push(`/courses/${course.id}`)}
                className="w-full px-4 py-2 bg-[var(--primary)] text-white font-semibold rounded-xl hover:bg-purple-800 transition">
                <FontAwesomeIcon icon={faPlayCircle} className="mr-2" />
                Acessar curso
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6 gap-2 flex-wrap">

        {currentPage > 1 && (
          <button
            className="px-3 py-1 rounded-lg font-semibold bg-white text-[var(--primary)] border border-purple-300 cursor-pointer"
            onClick={() => setCurrentPage(1)}
            aria-label="Primeira página"
          >
            <FontAwesomeIcon icon={faAnglesLeft} />
          </button>
        )}

        <button
          className="px-3 py-1 rounded-lg font-semibold bg-white text-[var(--primary)] border border-purple-300 disabled:opacity-50 cursor-pointer"
          onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
          aria-label="Página anterior"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1)
          .filter(page =>
            Math.abs(currentPage - page) <= 2
          )
          .map(page => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 rounded-lg font-semibold cursor-pointer ${currentPage === page
                ? 'bg-[var(--primary)] text-white'
                : 'bg-white text-[var(--primary)] border border-purple-300'
                }`}
            >
              {page}
            </button>
          ))}

        <button
          className="px-3 py-1 rounded-lg font-semibold bg-white text-[var(--primary)] border border-purple-300 disabled:opacity-50 cursor-pointer"
          onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
          disabled={currentPage === totalPages}
          aria-label="Próxima página"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>

        {currentPage < totalPages && (
          <button
            className="px-3 py-1 rounded-lg font-semibold bg-white text-[var(--primary)] border border-purple-300 cursor-pointer"
            onClick={() => setCurrentPage(totalPages)}
            aria-label="Última página"
          >
            <FontAwesomeIcon icon={faAnglesRight} />
          </button>
        )}
      </div>

    </div>
  );
}
