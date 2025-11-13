import styles from "./navbar.module.css";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <span className={styles.logo}>Logo</span>
      <div className={styles.middleBtns}>
        <Link href="/">Challenges</Link>
        <Link href="/about">Assignments</Link>
        <Link href="/contact">Team</Link>
      </div>
      <div className={styles.rightBtns}>
        <span className={styles.assignmentsRemaining}>
          7 assignments remaining
        </span>
        <Link href="/account">Account</Link>
      </div>
    </nav>
  );
}
