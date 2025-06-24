'use client'

import { ISelectedMenu } from '@/components/layout-private/types';
import { getMenu } from '@/components/layout-private/util';
import { useState, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/layout-private/Header';
import { Aside } from '@/components/layout-private/Aside/Aside';

export default function PublicLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const menu = useMemo(() => getMenu(), []);
  const initialSelected = useMemo(() => {
    const matched = menu.find(item => item.href === pathname);
    return matched?.title ?? 'Dashboard';
  }, [pathname, menu]);
  
  const [selectedMenu, setSelectedMenu] = useState<ISelectedMenu>(initialSelected as ISelectedMenu)

  return (
    <div className="w-[100vw] h-[100vh] flex bg-[var(--background)]">
      <Aside
        menu={menu}
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <main
        className={`
          ${menuOpen ? 'w-[88%]' : 'w-[100%]'}
          flex flex-col
          h-[100%]
          transition-[width] duration-300 ease-in-out
        `}
      >
        <Header selectedMenu={selectedMenu} />
        {children}
      </main>
    </div>
  );
}