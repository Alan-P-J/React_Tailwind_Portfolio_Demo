import { useState, useRef,useEffect } from 'react'

import './App.css'
import Hero from './components/Hero'
import Header from './components/Header'
import About from './components/About';
import ToTop from './components/ToTop';

function App() {
const [activeSection, setActiveSection] = useState('home');
const sectionRefs = {
  home: useRef(null),
  about: useRef(null),
  services: useRef(null),
  contact: useRef(null),
};
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Section is visible!");
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      threshold: 0.6,
    }
  );
   Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    
  }, [activeSection]);



  return (
    <>
    <Header setActiveSection={setActiveSection} activeSection={activeSection} sectionRefs={sectionRefs} ></Header>
      <Hero ref={sectionRefs.home}/>
      <About ref={sectionRefs.about}/>
      <ToTop></ToTop>
    </>
  )
}

export default App;
