import { Link } from "react-router-dom";
function Nav() {
 return (
   <nav className="nav nav-tabs mt-2">
     <Link className="nav-link" to="/Labs">A3</Link>
     <Link className="nav-link" to="/hello">Hello</Link>
     <Link className="nav-link" to="/Kanbas">Kanbas</Link>
     <Link className="nav-link" to="/Labs/a4">A4</Link>
   </nav>
 );
}
export default Nav;

