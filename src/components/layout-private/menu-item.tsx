'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ISelectedMenu, MenuItemProps } from '@/components/layout-private/types';
import Link from 'next/link';

export const MenuItem = ({
  title,
  href,
  icon,
  selectedMenu,
  setSelectedMenu,
  menuOpen,
}: MenuItemProps) => {

  const isSelected = selectedMenu === title;

  return (
    <Link
      href={href}
      className={`
        h-[7%]
        w-full
        ${isSelected ? 'bg-[var(--primary)] text-[var(--text-white)]' : 'bg-transparent text-[var(--text-light)]'}
        flex flex-col justify-center items-center
        font-bold
        rounded-tr-[30px] rounded-br-[30px]
        cursor-pointer
        transition-all duration-300 ease-in-out
        ${isSelected ? 'transform translate-x-0' : 'transform translate-x-[-5px]'}
        will-change-[transform,_background-color,_color]
      `}
      onClick={() => {
        if (!isSelected) {
          setSelectedMenu(title as ISelectedMenu);
        }
      }}
    >
      <div className={`flex ${menuOpen ? 'justify-start gap-4' : 'justify-center'} w-[80%] items-center`}>
        <FontAwesomeIcon
          icon={icon}
          color={isSelected ? 'white' : 'gray'}
        />
        <span
          className={`
            text-lg
              transition-all duration-300 ease-in-out
              ${menuOpen ? 'opacity-100 ml-0 max-w-[200px]' : 'opacity-0 ml-[-8px] max-w-0'}
              ${isSelected ? 'text-[var(--text-white)]' : 'text-[var(--text-light)]'}
              whitespace-nowrap overflow-hidden
            `}
        >
          {title}
        </span>
      </div>
    </Link>
  );
}
