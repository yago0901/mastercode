import { MobileMenuToggleProps } from './tipes';

export const MobileMenuToggle = ({ isOpen, toggle }: MobileMenuToggleProps) => (
  <button
    className={`lg:hidden fixed top-1.5 left-${isOpen ? "45" : "4"} z-50 flex flex-col justify-center items-center w-10 h-10 transition-all duration-300 ease-in-out`}
    onClick={toggle}
  >
    <span className={`block w-6 h-0.5 bg-[var(--text)] transition-all duration-300 ease-in-out ${isOpen ? "rotate-45 translate-y-1.5" : ""}`} />
    <span className={`block w-6 h-0.5 bg-[var(--text)] my-1 transition-all duration-300 ease-in-out ${isOpen ? "opacity-0" : ""}`} />
    <span className={`block w-6 h-0.5 bg-[var(--text)] transition-all duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
  </button>
);
