import styles from '../styles/footer.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 

export function Footer() {
  return (
    <div className={styles.footerContainer}>
      <p className={styles.footerText}>Feito por Évila Oliveira para PrograMaria - 2024</p>
      <div className={styles.socialLinks}>
        <a href="https://github.com/evicsss" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
          <FaGithub size={24} />
        </a>
        <a href="https://linkedin.com/in/evilaoliveira" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  );
}
