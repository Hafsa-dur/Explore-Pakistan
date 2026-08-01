import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
  <img src={logo} alt="Explore Pakistan Logo" />
  <h2>Explore Pakistan</h2>
</div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/">Destinations</Link>
        </li>

        <li>
          <Link to="/booking">Booking</Link>
        </li>

        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;