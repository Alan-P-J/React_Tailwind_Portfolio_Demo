import { useState, useRef,useEffect } from 'react'

import './App.css'
import Hero from './components/Hero'
import Header from './components/Header'
import About from './components/About';
import ToTop from './components/ToTop';
import Skills from './components/Skills';
import HeroSection from './components/herodemo';
import Projects from './components/Projects';
function App() {
const [activeSection, setActiveSection] = useState('home');
const sectionRefs = {
  home: useRef(null),
  about: useRef(null),
  skills: useRef(null),
  services: useRef(null),
  contact: useRef(null),
};
const [isVisible, setIsVisible] = useState(null);

useEffect(() => {
  window.scrollTo(0, 0);
    const handleScroll = () => {

      if (window.scrollY>100) {
        setIsVisible(true);
      }
      else  {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
     
  }, []);
   
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { 
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      threshold: 0.4,
    }
  );
   Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });
  return () => {
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.unobserve(ref.current);
    });   
  };

    
  }, [activeSection]);



  return (
    <>
    <Header setActiveSection={setActiveSection} activeSection={activeSection} sectionRefs={sectionRefs} ></Header>
      
      <Hero ref={sectionRefs.home}/>
      <About ref={sectionRefs.about}/>
      <Skills ref={sectionRefs.skills}></Skills>
      <Projects></Projects>
      {isVisible&&
      <ToTop></ToTop>}

      <HeroSection></HeroSection>
    </>
  )
}

export default App;
