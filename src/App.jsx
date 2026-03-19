import { useState, useRef, useEffect, lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ── Eager load — above the fold, must show instantly ──
import Header from "./components/Header";
import Hero from "./components/Hero";
import ToTop from "./components/ToTop"
// ── Lazy load — below the fold, load only when needed ──
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

import "./App.css";

// ── Simple section skeleton shown while loading ──
const SectionSkeleton = () => (
  <div className="flex items-center justify-center w-full min-h-screen bg-white dark:bg-gray-900 animate-pulse">
    <div className="w-full max-w-4xl px-8 space-y-4">
      <div className="w-48 h-8 mx-auto bg-gray-200 rounded-full dark:bg-gray-700" />
      <div className="w-full h-4 bg-gray-200 rounded-full dark:bg-gray-700" />
      <div className="w-3/4 h-4 mx-auto bg-gray-200 rounded-full dark:bg-gray-700" />
    </div>
  </div>
);

function App() {
  const [activeSection, setActiveSection] = useState("home");
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
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
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
        rootMargin: "0px 0px -15% 0px",
      },
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
      <Header
        setActiveSection={setActiveSection}
        activeSection={activeSection}
        sectionRefs={sectionRefs}
      ></Header>
      <Hero ref={sectionRefs.home} />
      <Suspense fallback={<SectionSkeleton />}>
        <About ref={sectionRefs} />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Skills ref={sectionRefs.skills} />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Projects ref={sectionRefs.project} />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Contact ref={sectionRefs.contact} />
      </Suspense>
      <Suspense fallback={<div className="h-24 bg-gray-800 animate-pulse" />}>
        <Footer />
      </Suspense>

      {isVisible && <ToTop></ToTop>}
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
  );
}

export default App;
