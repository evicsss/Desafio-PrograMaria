import { useState, useEffect } from 'react';
import logo from '../assets/mm.png';
import styles from '../styles/header.module.css';

export function Header({ title, subtitle }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.headerContainer} ${scrolled ? styles.scrolled : ''}`}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <nav className={styles.navLinks}>
        <a href="https://www.programaria.org/cursos-programaria/" target="_blank">PROGRAMARIA</a>
        <div className={styles.socialLinks}>
          <a href="https://github.com/evicsss" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            REPOSITÓRIO
          </a> </div>
          <div className={styles.socialLinks}>
          <a href="https://linkedin.com/in/evilaoliveira" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
            LINKEDIN
          </a>
        </div>
      </nav>
    </header>
  );
}
