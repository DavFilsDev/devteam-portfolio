import { useRef } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import HeroSection from '../../components/HeroSection';
import AboutSection from '../../components/AboutSection';
import TeamSection from '../../components/TeamSection';
import ProjectSection from '../../components/ProjectSection';
import ServiceSection from '../../components/ServiceSection';

const HomePage = () => {
  
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const teamsRef = useRef(null);
  const servicesRef = useRef(null);
  const technologiesRef = useRef(null);
  const contactRef = useRef(null);
  

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 80, // Adjust for header height
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        scrollToSection={scrollToSection}
        refs={{ aboutRef, projectsRef, teamsRef, servicesRef, technologiesRef, contactRef }}
      />
      
      <main className="pt-15 bg-light dark:bg-dark"> 
        <HeroSection
          scrollToSection={scrollToSection}
          refs={{ projectsRef, contactRef }}
        />
        <AboutSection 
          ref={aboutRef}
        />
        <ProjectSection 
          ref={projectsRef}
        />
        <TeamSection 
          ref={teamsRef}
        />
        <ServiceSection 
          ref={servicesRef}
        />
        <div ref={technologiesRef} className="h-screen">Technologies Section</div>
        <div ref={contactRef} className="h-screen ">Contact Section</div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;