'use client';

import Image from 'next/image';
import { AsideProps } from '@/components/layout-private/types';
import { useState } from 'react';
import { MenuItem } from '../menu-item';

export const Aside = ({ menu, selectedMenu, setSelectedMenu, menuOpen, setMenuOpen }: AsideProps) => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <button
        className={`md:hidden fixed top-1.5 left-${mobileMenuOpen ? '45' : '4'} z-50 flex flex-col justify-center items-center w-10 h-10 
      transition-all duration-300 ease-in-out`}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <span
          className={`
      block w-6 h-0.5 bg-[var(--text)]
      transition-all duration-300 ease-in-out 
      ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}>
        </span>
        <span
          className={`
      block w-6 h-0.5 bg-[var(--text)] my-1
      transition-all duration-300 ease-in-out
      ${mobileMenuOpen ? 'opacity-0' : ''}`}>
        </span>
        <span
          className={`
      block w-6 h-0.5 bg-[var(--text)]
      transition-all duration-300 ease-in-out
      ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}>
        </span>
      </button>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div
          className="fixed top-0 left-0 w-[40%] h-full bg-[var(--background)] shadow-lg flex flex-col items-center pt-10 z-40 md:hidden transition-transform"
        >
          <div className="mb-8">
            <Image
              src="/image/assinalanches-logo.png"
              alt="EasyAgent logo"
              width={75}
              height={25}
              priority
            />
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
                setMobileMenuOpen(false);
              }}
              menuOpen={true}
            />
          ))}
        </div>
      )}

      <aside
        className={`
        will-change-[width]
        bg-[var(--background)]
        transition-[width] duration-300 ease-in-out
        flex flex-col items-center 
        rounded-tr-[15px] rounded-br-[15px]
        shadow-[4px_0_10px_rgba(0,0,0,0.1)]
        relative z-[2]
        ${menuOpen ? 'w-[12%]' : 'w-[4%]'}        
        hidden md:flex
      `}
      >
        <div className='flex items-center w-full'>
          <button
            className={`fixed top-3 left-7 z-50 flex flex-col justify-center items-center h-10 
      transition-all duration-300 ease-in-out`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`
      block w-6 h-0.5 bg-[var(--text)] 
      transition-all duration-300 ease-in-out
      ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}>
            </span>
            <span
              className={`
      block w-6 h-0.5 bg-[var(--text)] my-1
      transition-all duration-300 ease-in-out
      ${menuOpen ? 'opacity-0' : ''}`}>
            </span>
            <span
              className={`
      block w-6 h-0.5 bg-[var(--text)] 
      transition-all duration-300 ease-in-out
      ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}>
            </span>
          </button>
        </div>
        <div className="relative w-[150px] h-[50px] overflow-hidden transition-all duration-300 ease-in-out mt-16">
          <Image
            src="/image/assinalanches-logoEx.png"
            alt="Logo expandido"
            fill
            className={`object-contain transition-opacity duration-300 ease-in-out ${menuOpen ? 'opacity-100' : 'opacity-0'} absolute`}
            priority
          />
          <Image
            src="/image/assinalanches-logo.png"
            alt="Logo compacto"
            fill
            className={`object-contain transition-opacity duration-300 ease-in-out ${!menuOpen ? 'opacity-100' : 'opacity-0'} absolute`}
            priority
          />
        </div>
        <div className="mt-4 w-full h-[60%] flex flex-col items-center">
          {menu.map((item) => (
            <MenuItem
              key={item.title}
              title={item.title}
              href={item.href}
              icon={item.icon}
              selectedMenu={selectedMenu}
              setSelectedMenu={setSelectedMenu}
              menuOpen={menuOpen}
            />
          ))}
        </div>
      </aside>
    </>
  );
};
