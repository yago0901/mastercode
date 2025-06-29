import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export interface IMenu {
  href: string;
  title: string;
  icon: IconDefinition
}

export type ISelectedMenu= 'Dashboard'|'Pedidos'|'Mantimentos'|'Produtos'|'Vínculo'| 'Estoque';

export interface AsideProps {
  menu: {
    title: string;
    href: string;
    icon: IconDefinition;
  }[];
  selectedMenu: ISelectedMenu;
  setSelectedMenu: (menu: ISelectedMenu) => void;
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
}

export interface MenuItemProps {
  title: string;
  href: string;
  icon: IconDefinition;
  selectedMenu: ISelectedMenu;
  setSelectedMenu: (menu: ISelectedMenu) => void;
  menuOpen: boolean;
}