"use client";

import { useState } from "react";
import { AsideProps } from "@/components/layout-private/MenuItem/types";
import { MenuItem } from "../MenuItem";
import { MobileMenuToggle } from "./MobileMenuToggle";
import { MobileMenu } from "./MobileMenu";
import { DesktopMenuToggle } from "./DesktopMenuToggle";
import { LogoDisplay } from "./LogoDisplay";

export const Aside = ({ menu, selectedMenu, setSelectedMenu, menuOpen, setMenuOpen }: AsideProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <MobileMenuToggle isOpen={mobileMenuOpen} toggle={() => setMobileMenuOpen(!mobileMenuOpen)} />
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        menu={menu}
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
      />

      <aside
        className={`
          will-change-[width]
          bg-[var(--background)]
          transition-[width] duration-300 ease-in-out
          flex flex-col items-center 
          rounded-tr-[15px] rounded-br-[15px]
          shadow-[4px_0_10px_rgba(0,0,0,0.1)]
          relative z-[2]
          ${menuOpen ? "w-[12%]" : "w-[4%]"}
          min-w-[60px]     
          hidden lg:flex
        `}
      >
        <DesktopMenuToggle isOpen={menuOpen} toggle={() => setMenuOpen(!menuOpen)} />
        <LogoDisplay isExpanded={menuOpen} />
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
