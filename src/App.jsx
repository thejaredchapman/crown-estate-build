import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import BuildPhases from './components/BuildPhases';
import Specifications from './components/Specifications';
import Philosophy from './components/Philosophy';
import Budget from './components/Budget';
import Interior from './components/Interior';
import Audio from './components/Audio';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function toggleTheme() {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  }

  return (
    <>
      <Nav theme={theme} onToggleTheme={toggleTheme} />
      <Hero />
      <Gallery />
      <hr className="divider" />
      <BuildPhases />
      <hr className="divider" />
      <Specifications />
      <hr className="divider" />
      <Philosophy />
      <Budget />
      <hr className="divider" />
      <Interior />
      <hr className="divider" />
      <Audio />
      <Footer />
    </>
  );
}
