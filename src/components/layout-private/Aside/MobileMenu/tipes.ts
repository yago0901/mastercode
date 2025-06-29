import { AsideProps } from '../../MenuItem/types';

export interface MobileMenuProps extends Pick<AsideProps, 'menu' | 'selectedMenu' | 'setSelectedMenu'> {
  isOpen: boolean;
  onClose: () => void;
}