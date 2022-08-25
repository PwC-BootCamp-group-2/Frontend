import spacehub from "../../assets/img/spacehub-logo.svg";
import { Link } from "react-router-dom";
import { FaBars, FaUserAlt, FaTimes, FaSignInAlt } from "react-icons/fa";
import "./Header.css";
import { Menu } from "../menu/Menu";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  // Get the state of the navbar
  const [navList, setNavList] = useState(false);

  return (
    <header>
      <div className="container flex justify-content-between">
        <div className="logo">
          <Link to="/">
            <img src={spacehub} alt="logo" />
          </Link>
        </div>

        <div className="nav">
          <ul className={navList ? "small" : "flex"}>
            {Menu.map((list, index) => (
              <li key={index}>
                <Link to={list.path}>{list.text}</Link>
              </li>
            ))}
            <div className="mobile-div">
              <button
                className="btn mybtn"
                id="loginbtn"
                onClick={() => navigate("/login")}
              >
                <FaUserAlt />
                <span > Login</span>
              </button>
              <button
                className="btn mybtn"
                id="signupbtn"
                onClick={() => navigate("/signup")}
              >
                <FaSignInAlt />
                <span> Create a free account</span>
              </button>
            </div>
          </ul>
        </div>

        <div className="acct-div">
<<<<<<< HEAD
          <button
            className="btn btn-outline text-muted"
            onClick={() => navigate("/login")}
          >
            <FaUserAlt />
            <span> Login</span>
          </button>


          <button
            className="btn mybtn btn-secondary" id="signupbtn"
=======
          <button
            className="btn mybtn"
            id="signupbtn"
>>>>>>> 9220a69cd454967e43754707fd0b2886e5758819
            onClick={() => navigate("/signup")}
          >
            <FaSignInAlt />
            <span> Signup</span>
          </button>
          <button className="mybtn btn" id="loginbtn">
            <FaUserAlt />
            <span> Login</span>
          </button>
          <button
            className="btn mybtn"
            id="loginbtn"
            onClick={() => navigate("/login")}
          >
            <FaUserAlt />
            <span> Login</span>
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
