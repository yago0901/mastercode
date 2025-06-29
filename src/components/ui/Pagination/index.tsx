import {
  faChevronLeft,
  faChevronRight,
  faAnglesLeft,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Props } from './tipes';

export default function Pagination({
  currentPage,
  totalPages,
  onChange,
}: Props) {
  return (
    <div className="flex justify-center mt-6 gap-2 flex-wrap">
      {currentPage > 1 && (
        <button
          onClick={() => onChange(1)}
          aria-label="Primeira página"
          className="px-3 py-1 rounded-lg bg-white text-[var(--primary)] border border-purple-300 cursor-pointer"
        >
          <FontAwesomeIcon icon={faAnglesLeft} />
        </button>
      )}

      <button
        onClick={() => onChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded-lg bg-white text-[var(--primary)] border border-purple-300 disabled:opacity-50 cursor-pointer"
        aria-label="Página anterior"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1)
        .filter((page) => Math.abs(currentPage - page) <= 2)
        .map((page) => (
          <button
            key={page}
            onClick={() => onChange(page)}
            className={`px-3 py-1 rounded-lg font-semibold cursor-pointer ${
              page === currentPage
                ? "bg-[var(--primary)] text-white"
                : "bg-white text-[var(--primary)] border border-purple-300"
            }`}
          >
            {page}
          </button>
        ))}

      <button
        onClick={() => onChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded-lg bg-white text-[var(--primary)] border border-purple-300 disabled:opacity-50 cursor-pointer"
        aria-label="Próxima página"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>

      {currentPage < totalPages && (
        <button
          onClick={() => onChange(totalPages)}
          aria-label="Última página"
          className="px-3 py-1 rounded-lg bg-white text-[var(--primary)] border border-purple-300 cursor-pointer"
        >
          <FontAwesomeIcon icon={faAnglesRight} />
        </button>
      )}
    </div>
  );
}
