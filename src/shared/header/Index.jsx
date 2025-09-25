import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Index.module.css";

import Menu from "@assets/icons/Menu.jsx";
import Home from "@assets/icons/Home.jsx";

export default function Header() {
  return (
    <header className={styles.header}>
      <NavLink to="/">
        <h1>Consultant</h1>
      </NavLink>

      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <Home size={24} color={"black"} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <Menu size={24} color={"black"} />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
