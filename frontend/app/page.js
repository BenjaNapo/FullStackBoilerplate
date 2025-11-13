"use client";

import styles from "./page.module.css";
import Link from "next/link";

export default function ChallengesPage() {
  return (
    <>
      <h1>Challenges</h1>
      <div className="boxedButton">
        <p>To create a new challenge click below:</p>
        <Link href="/create">
          <button className="btn">Create Challenge</button>
        </Link>
      </div>
      <div className={styles.challengeListContainer}>
        <div className={styles.tabs}>
          <button>Available</button>
          <button>Archived</button>
        </div>
        <div className={styles.challengeList}></div>
      </div>
    </>
  );
}
