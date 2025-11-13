import styles from "./page.module.css";

export default function CreatePage() {
  return (
    <>
      <h1>Create a Challenge</h1>
      <p>Create a new challenge that can be sent out to a candidate.</p>
      <p>
        Your challenge's name is shown to candidates. Make it brief, but
        informative.
      </p>
      <form className={styles.form}>
        <label>
          <b>Challenge Name</b>
        </label>
        <input type="text" name="challengeName" />
        <button type="submit" className="btn">
          Create
        </button>
      </form>
    </>
  );
}
