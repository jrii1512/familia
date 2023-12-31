import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="headerNavi">
      <Link className="site-logo" to="/">#JRLA</Link>
      <nav>   
        <Link to="/">Hima</Link>
        <Link to="/gallery">Photoja</Link>
        <Link to="/joulu">Joulu 2023</Link>
        <Link to="/kisut">Kisut</Link>        
        {process.env.REACT_APP_SERVER === "http://localhost:4000" && <Link to="/uploader">Lataa kuva</Link>}
      </nav>
    </header>
  );
}
