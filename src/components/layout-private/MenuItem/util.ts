import { IMenu } from './types';
import {
  faTachometerAlt, 
  faBookOpen,         
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
    icon: faBookOpen
  }
];