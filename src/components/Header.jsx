import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link className="site-logo" to="/">#JRLA</Link>
      <nav>   
        <Link to="/">Hima</Link>
        <Link to="/gallery">Photoja</Link>
        <Link to="/kisut">Kisut</Link>        
        <Link to="/uploader">Lataa kuva</Link>
      </nav>
    </header>
  );
}
