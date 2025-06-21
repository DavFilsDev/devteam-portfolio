import { useRef } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

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
      
      <main className="pt-15"> {/* Padding to account for fixed header */}
        <div className='h-screen'></div>
        <div ref={aboutRef} className="h-screen bg-gray-50">About Section</div>
        <div ref={projectsRef} className="h-screen bg-white">Projects Section</div>
        <div ref={teamsRef} className="h-screen bg-white">Teams Section</div>
        <div ref={servicesRef} className="h-screen bg-white">Services Section</div>
        <div ref={technologiesRef} className="h-screen bg-white">Technologies Section</div>
        <div ref={contactRef} className="h-screen bg-white">Contact Section</div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;