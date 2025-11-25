import PropTypes from 'prop-types';
import logo from '../../assets/images/logo/sopatekLogo.png'
import { useTheme} from '../../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { useState} from 'react';
import { Menu, X } from 'lucide-react';



const Header = ({ scrollToSection, refs }) => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollAndClose = (ref) => {
    scrollToSection(ref);
    setIsMenuOpen(false); 
  };

  return (
    <header className="flex justify-center fixed w-full z-50 py-2 px-2 bg-light dark:bg-dark backdrop-blur-md shadow-md" >
      <div className="flex justify-between items-center w-full max-w-7xl">
        <div className="flex items-center">
          <img 
            src={logo} 
            alt="SopaTek Portfolio Logo" 
            className="h-10 w-auto"
          />
          <span className="lg:ml-3 text-2xl font-bold text-primary">SopaTek</span>
        </div>

        <div className='flex justify-between items-center lg:space-x-7'>
          <nav className="hidden lg:flex space-x-8">
            <button 
              onClick={() => scrollToSection(refs.aboutRef)}
              className="text-dark dark:text-white hover:text-primary dark:hover:text-primary font-medium transition-colors"
            >
              {t('menu.about')}
            </button>
            <button 
              onClick={() => scrollToSection(refs.projectsRef)}
              className="text-dark dark:text-white hover:text-primary dark:hover:text-primary font-medium transition-colors"
            >
              {t('menu.projects')}
            </button>
            <button 
              onClick={() => scrollToSection(refs.teamsRef)}
              className="text-dark dark:text-white hover:text-primary dark:hover:text-primary font-medium transition-colors"
            >
              {t('menu.teams')}
            </button>
            <button 
              onClick={() => scrollToSection(refs.servicesRef)}
              className="text-dark dark:text-white hover:text-primary dark:hover:text-primary font-medium transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection(refs.technologiesRef)}
              className="text-dark dark:text-white hover:text-primary dark:hover:text-primary font-medium transition-colors"
            >
              Technologies
            </button>
          </nav>

          <div className='flex justify-center items-center'>
            <button
              onClick={toggleTheme}
              className={`w-14 h-7 flex items-center rounded-full p-2 transition duration-500 ${
                theme === 'light' ? 'bg-yellow-500' : 'bg-gray-700'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full shadow-md transform transition duration-500 ease-in-out flex items-center justify-center text-sm ${
                  theme === 'light'
                    ? 'translate-x-6 bg-white text-yellow-500'
                    : 'translate-x-0 bg-black text-white'
                }`}
              >
                {theme === 'light' ? '☀️' : '🌙'}
              </div>
            </button>
            < LanguageSwitcher />
          </div>

          {/* Menu Mobile Button */}
          <div className="lg:hidden relative flex items-center space-x-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 dark:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>

            {/* Menu Mobile */}
            {isMenuOpen && (
                <div className="absolute top-full right-0 mt-4 w-40 bg-light dark:bg-dark shadow-lg animate-fade-in-down z-50 rounded-xl p-3 space-y-1 border border-gray-200 dark:border-dark">
                  <button onClick={() => handleScrollAndClose(refs.aboutRef)} className="mobile-nav-link">{t('menu.about')}</button>
                  <button onClick={() => handleScrollAndClose(refs.projectsRef)} className="mobile-nav-link">{t('menu.projects')}</button>
                  <button onClick={() => handleScrollAndClose(refs.teamsRef)} className="mobile-nav-link">{t('menu.teams')}</button>
                  <button onClick={() => handleScrollAndClose(refs.servicesRef)} className="mobile-nav-link">Services</button>
                  <button onClick={() => handleScrollAndClose(refs.technologiesRef)} className="mobile-nav-link">Technologies</button>
                  <button onClick={() => handleScrollAndClose(refs.contactRef)} className="mobile-nav-link">{t('menu.contact_us')}</button>
                </div>
              )}
          </div>
        </div>
      </div>
  
    </header>
  );
};

Header.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
  refs: PropTypes.shape({
    aboutRef: PropTypes.object,
    projectsRef: PropTypes.object,
    teamsRef: PropTypes.object,
    servicesRef: PropTypes.object,
    technologiesRef: PropTypes.object,
    contactRef: PropTypes.object,
  }).isRequired
};

export default Header;