import styles from "./Index.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        <li>Instagram</li>
        <li>Facebook</li>
        <li>Twitter</li>
        <li>LinkedIn</li>
      </ul>
      <ul>
        <li>©2025 Ced: All rights reserved</li>
        <li>Privacy Policy</li>
        <li>Terms of Service</li>
      </ul>
    </footer>
  );
}
