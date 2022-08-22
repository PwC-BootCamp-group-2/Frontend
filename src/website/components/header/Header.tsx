import spacehub from "../../assets/img/spacehub.png";
import { Link } from "react-router-dom";
import { FaBars, FaUserAlt, FaTimes } from "react-icons/fa";
import "./Header.css";
import { useState } from "react";

const Header = () => {
  // Get the state of the navbar
  const [navList, setNavList] = useState(false);

  return (
    <header>
      <nav className="container flex">
        <div className="logo">
          <img src={spacehub} alt="logo" />
        </div>

        <div className="nav">
          <ul className={navList ? "small" : "flex"}>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/howitworks">How it Works</Link>
            </li>
            <li>
              <Link to="/becomeahost">Become a Host</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
          </ul>
        </div>

        <div className="acct-div">
          <button className="btn btn-account">
            <FaUserAlt className="btn-icon" />
            <span>Account</span>
          </button>
        </div>

        <div className="toggle">
          <button onClick={() => setNavList(!navList)} className="btn-menu">
            {navList ? <FaTimes color="orangered" /> : <FaBars />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
