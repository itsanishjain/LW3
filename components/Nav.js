import React from "react";
import Link from "next/link";
import styles from "../styles/Nav.module.css";


export default function Nav() {
  return (
    <nav className={styles.aClass}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>

      <Link href="/learners">
        <a>learners</a>
      </Link>
    </nav>
  );
}
