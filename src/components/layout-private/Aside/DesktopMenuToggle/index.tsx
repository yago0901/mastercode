import { DesktopMenuToggleProps } from './tipes';

export const DesktopMenuToggle = ({ isOpen, toggle }: DesktopMenuToggleProps) => (
  <button
    className="fixed top-3 left-7 z-50 flex flex-col justify-center items-center h-10 transition-all duration-300 ease-in-out"
    onClick={toggle}
  >
    <span className={`block w-6 h-0.5 bg-[var(--text)] transition-all duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
    <span className={`block w-6 h-0.5 bg-[var(--text)] my-1 transition-all duration-300 ease-in-out ${isOpen ? "opacity-0" : ""}`} />
    <span className={`block w-6 h-0.5 bg-[var(--text)] transition-all duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
  </button>
);
