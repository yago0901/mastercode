import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { ISelectedMenu } from './types';
import { useTheme } from '@/hooks/useTheme';

const Header = ({ selectedMenu }: { selectedMenu: ISelectedMenu }) => {

  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <header
      className="h-[50px] min-h-[50px] box-border overflow-hidden w-full bg-[var(background)] border-b border-[var(--primary)]
                flex items-center justify-between pl-9 pr-4 font-bold text-base text-[var(--text)]">
      {selectedMenu}
      <div className='flex'>
        <div
          onClick={toggleTheme}
          className={`flex items-center cursor-pointer transition-transform duration-500 ${isDarkMode ? 'rotate-180' : 'rotate-0'}`}>
          <FontAwesomeIcon
            icon={isDarkMode ? faSun : faMoon}
            className={`h-6 w-6 ${isDarkMode ? 'text-yellow-300' : 'text-blue-500'} transition-all`}
          />
        </div>
        <span className="ml-2">User</span>
      </div>
    </header>
  )
}

export default Header;