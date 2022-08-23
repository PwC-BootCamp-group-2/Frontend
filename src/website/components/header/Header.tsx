import spacehub from "../../assets/img/spacehub.png";
import { Link } from "react-router-dom";
import { FaBars, FaUserAlt, FaTimes, FaSignInAlt } from "react-icons/fa";
import "./Header.css";
import { Menu } from "../menu/Menu";
import { useState } from "react";

const Header = ({ }) => {
  // Get the state of the navbar
  const [navList, setNavList] = useState(false);

  return (
    <header>
      <div className="container flex justify-content-between">
        <div className="logo">
          <img src={spacehub} alt="logo" />
        </div>

        <div className="nav">
          <ul className={navList ?  "small" : "flex"}>
            {Menu.map((list, index) => (
              <li key={index}>
                <Link to={list.path}>{list.text}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="acct-div">
          <button className="btn btn-outline">
            <FaSignInAlt />
            <span> Signup</span>
          </button>

          <button className="btn btn-fill">
            <FaUserAlt className="btn-icon" />
            <span>Login</span>
          </button>
        </div>

        <div className="toggle">
          <button onClick={() => setNavList(!navList)} className="btn-menu">
            {navList ? <FaTimes color="orangered" /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
