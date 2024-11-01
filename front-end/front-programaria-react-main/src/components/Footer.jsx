import styles from '../styles/footer.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 

export function Footer() {
  return (
    <div className={styles.footerContainer}>
        <p className={styles.footerText}>Feito com ❤️ por Évila Oliveira para PrograMaria - 2024</p>
      </div>
  );
}
