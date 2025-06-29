"use client";
import { Dispatch, SetStateAction } from "react";
import { useEffect } from "react";

export interface IModalProps {
  isOpen: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
  className?: string;
}
const Modal: React.FC<IModalProps> = ({ isOpen, onClose, children, className = "" }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300"
        onClick={() => onClose(false)}
      />

      <div
        className={`relative z-10 bg-[var(--background)] rounded-2xl shadow-lg p-6 w-full max-w-md ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-[var(--text)] hover:text-gray-800 text-2xl cursor-pointer"
          onClick={() => onClose(false)}
          aria-label="Fechar modal"
        >
          &times;
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;
