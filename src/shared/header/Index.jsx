import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Index.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Consultant</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#about">Services</a>
          </li>
          <li>
            <a href="#about">Testimonials</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
