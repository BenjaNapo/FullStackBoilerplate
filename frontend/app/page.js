"use client";

import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <h1>Challenges</h1>
      <div className={styles.createChallengeBox}>
        <p>To create a new challenge click below:</p>
        <button className="btn">Create Challenge</button>
      </div>
    </>
  );
}
