import { Link } from "react-router-dom";
import "./Navbar.css";
import "./styles.css";

export const Navbar = () => {
  return (
    <nav className="nav">
      <div className="header">
        <img src="./Resources/kickgearlogo.png" alt="Logo" />
      </div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};
