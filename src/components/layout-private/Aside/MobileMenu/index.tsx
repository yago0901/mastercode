import Image from "next/image";
import { MenuItem } from '../../MenuItem';
import { MobileMenuProps } from './tipes';

export const MobileMenu = ({ isOpen, onClose, menu, selectedMenu, setSelectedMenu }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-[40%] h-full bg-[var(--background)] shadow-lg flex flex-col items-center pt-10 z-40 md:hidden transition-transform">
      <div className="mb-8">
        <Image src="/image/logo.png" alt="Logo" width={75} height={25} priority />
      </div>
      {menu.map((item) => (
        <MenuItem
          key={item.title}
          title={item.title}
          href={item.href}
          icon={item.icon}
          selectedMenu={selectedMenu}
          setSelectedMenu={(menu) => {
            setSelectedMenu(menu);
            onClose();
          }}
          menuOpen={true}
        />
      ))}
    </div>
  );
};
