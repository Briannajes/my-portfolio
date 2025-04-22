import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footerLinks}>
        <li><a href="https://github.com/briannajes" target="_blank" rel="noreferrer">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/brianna-jesionowski-5937a01b9" target="_blank" rel="noreferrer">LinkedIn</a></li>
        <li><a href="mailto:br827380@ucf.edu">Email</a></li>
      </ul>
      <p className={styles.copy}>© {new Date().getFullYear()} Brianna Jesionowski All rights reserved.</p>
    </footer>
  );
}
export default Footer;
