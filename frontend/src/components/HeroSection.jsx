import ParticlesBackground from './common/ParticlesBg';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const HeroSection = ({ scrollToSection, refs}) =>{
  const { t } = useTranslation();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden text-dark dark:text-light">
      <ParticlesBackground />

      <div className="relative z-10 text-center px-4 max-w-5xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          {t('heroSection.headline')}
        </h1>
        <p className="text-2xl mb-8">
          {t('heroSection.subheadline')}
        </p>
        <div className="flex gap-4 justify-center">
          <button 
            onClick={() => scrollToSection(refs.projectsRef)}
            className="border-2 border-secondary text-light px-8 py-3 rounded-lg font-medium bg-secondary dark:hover:text-primary transition-all default"
          >
            {t('heroSection.second-call-to-action')} →
          </button>
        </div>
      </div>
    </section>
  );
}

HeroSection.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
  refs: PropTypes.shape({
    projectsRef: PropTypes.object,
    contactRef: PropTypes.object,
  }).isRequired
};


export default HeroSection;