import styles from "./Index.module.css";

// Icons //

import Instagram from "@assets/icons/Instagram.jsx";
import Facebook from "@assets/icons/Facebook.jsx";
import X from "@assets/icons/X.jsx";
import LinkedIn from "@assets/icons/LinkedIn.jsx";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.socials}>
        <a
          href="https://www.instagram.com/cedthecounselor/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram size={36} role="img" aria-label="Instagram icon" />
        </a>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook size={36} role="img" aria-label="Facebook icon" />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <X size={36} role="img" aria-label="Twitter icon" />
        </a>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn size={36} role="img" aria-label="LinkedIn icon" />
        </a>
      </ul>
      <ul className={styles.legal}>
        <li>©{new Date().getFullYear()} Ced: All rights reserved</li>
        <div className={styles.policies}>
          <NavLink to="/privacy-policy">Privacy Policy</NavLink>
          <NavLink to="/terms-of-service">Terms of Service</NavLink>
        </div>
      </ul>
    </footer>
  );
}
