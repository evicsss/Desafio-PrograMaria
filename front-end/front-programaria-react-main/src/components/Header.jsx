import { useState, useEffect } from 'react';
import logo from '../assets/mm.png';
import styles from '../styles/header.module.css';

export function Header({ title, subtitle }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener ('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className= {`${styles.headerContainer} ${scrolled ? styles.scrolled : ''}`}>
      <img src={logo} alt="Logo" className={styles.logo} />
      <nav className={styles.navLinks}>
        <a href="#saibaMais">PrograMaria</a>
        <a href="#minhaLista">Contato</a>
      </nav>
      <div className={styles.profile}>
        <img src="../assets/mm.png" alt="Perfil" className={styles.userIcon} />
      </div>
    </header>
  );
}