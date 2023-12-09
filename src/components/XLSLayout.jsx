

import { Link, Outlet } from "react-router-dom";

export default function XLSLayout() {
  return (
    <nav className="host-nav">
      <Link to="/stuff/upload">Upload</Link>
      <Link to="/stuff/reader">Reader</Link>
      <Outlet/>
    </nav>
  );
}
