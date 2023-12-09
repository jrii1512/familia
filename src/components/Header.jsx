import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link className="site-logo" to="/">#JRLA</Link>
      <nav>   
        <Link to="/">Home</Link>
        <Link to="/gallery">Image gallery</Link>
        <Link to="/kisut">Cats</Link>
      </nav>
    </header>
  );
}
