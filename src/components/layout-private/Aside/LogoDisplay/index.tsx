import Image from "next/image";
import { LogoDisplayProps } from './tipes';

export const LogoDisplay = ({ isExpanded }: LogoDisplayProps) => (
  <div className="relative w-[150px] h-[50px] overflow-hidden transition-all duration-300 ease-in-out mt-16">
    <Image
      src="/image/logo.png"
      alt="Logo expandido"
      fill
      className={`object-contain transition-opacity duration-300 ease-in-out ${isExpanded ? "opacity-100" : "opacity-0"} absolute`}
      priority
    />
    <Image
      src="/image/logo.png"
      alt="Logo compacto"
      fill
      className={`object-contain transition-opacity duration-300 ease-in-out ${!isExpanded ? "opacity-100" : "opacity-0"} absolute`}
      priority
    />
  </div>
);
