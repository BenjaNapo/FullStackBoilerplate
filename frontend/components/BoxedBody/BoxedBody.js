export default function BoxedButton({ children, title }) {
  return (
    <div className="boxedButton">
      <h3>Quickstart</h3>
      <hr></hr>
      <p>
        If you are looking to get setup quickly, you can initialize the
        challenges's template repository with a README file.
      </p>
      <Link href="/create">
        <button className="btn">initialize with README</button>
      </Link>
    </div>
  );
}
