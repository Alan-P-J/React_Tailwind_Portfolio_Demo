import { useState, useRef,useEffect } from 'react'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Hero from './components/Hero'
import Header from './components/Header'
import About from './components/About';
import ToTop from './components/ToTop';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/footer';

function App() {
const [activeSection, setActiveSection] = useState('home');
const sectionRefs = {
  home: useRef(null),
  about: useRef(null),
  skills: useRef(null),
  services: useRef(null),
  contact: useRef(null),
  project: useRef(null),
};
const [isVisible, setIsVisible] = useState(null);
  
useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

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
        
        // console.log("Observing section:", entry.target.id, "isIntersecting:", entry.isIntersecting);  
        if (entry.isIntersecting) { 
          setActiveSection(entry.target.id);
          // console.log("Active section set to:", entry.target.id);
        }
      });
    },
    {
      threshold: 0.3,
      rootMargin: '0px 0px -15% 0px',
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
  const onTop = () => {
    console.log("onTop called in App");
    setActiveSection('home');
  }
  return (
    <>
    <Header setActiveSection={setActiveSection} activeSection={activeSection} sectionRefs={sectionRefs} ></Header>
      
      <Hero ref={sectionRefs.home}/>
      <About ref={sectionRefs.about}/>
      <Skills ref={sectionRefs.skills}></Skills>
      <Projects ref={sectionRefs.project}></Projects>
      <Contact ref={sectionRefs.contact}></Contact>
      <Footer></Footer>
      {isVisible&&
      <ToTop onTop={onTop} ></ToTop>}
       <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
      />
    </>
  )
}

export default App;
