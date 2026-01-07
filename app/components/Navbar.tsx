import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">ShopCart</Link>
      </div>

      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/catalog">Shop</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <div className={styles.actions}>
        <span>🔍</span>
        <span>♡</span>
        <span>🛒</span>
      </div>
    </header>
  );
}
