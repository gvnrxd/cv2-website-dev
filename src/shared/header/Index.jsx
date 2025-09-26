import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Index.module.css";

import Menu from "@assets/icons/Menu.jsx";

export default function Header() {
  return (
    <header className={styles.header}>
      <NavLink to="/">
        <p>Logo</p>
      </NavLink>
      <nav>
        <ul>
          <li>
            <NavLink to="/about">
              <Menu size={32} color={"var(--white)"} />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
