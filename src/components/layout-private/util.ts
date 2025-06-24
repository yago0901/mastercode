import { IMenu } from './types';
import {
  faTachometerAlt, 
  faReceipt,        
  faCarrot,          
} from '@fortawesome/free-solid-svg-icons';

export const getMenu = (): IMenu[] => [
  {
    title: 'Dashboard',
    href: '/',
    icon: faTachometerAlt
  },
  {
    title: 'Cursos',
    href: '/courses',
    icon: faReceipt
  },
  {
    title: 'Vídeos',
    href: '/videos',
    icon: faCarrot
  }
];