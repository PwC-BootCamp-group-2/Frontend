import "./Sidebar.css";
import { useState } from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { BiCog, BiChart, BiMenu } from "react-icons/bi";
import { TbArmchair2 } from "react-icons/tb";
import { BsGrid, BsEnvelope, BsCart, BsStar } from "react-icons/bs";
import logo from "../../utils/images/logo.svg";
import { NavLink } from "react-router-dom";
import { logout } from "../../../features/Auth/authSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../app/store";

const Sidebar = ({ children }: any) => {
  const dispatch = useDispatch<AppDispatch>();
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <BsGrid size={25} />,
    },
    {
      path: "/booking",
      name: "Bookings",
      icon: <BsCart size={25} />,
    },
    {
      path: "/messages",
      name: "Messages",
      icon: <BsEnvelope size={25} />,
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <BiChart size={25} />,
    },
    {
      path: "/spaces",
      name: "Spaces",
      icon: <TbArmchair2 size={25} />,
    },
    {
      path: "/promotion",
      name: "Promotion",
      icon: <BsStar size={25} />,
    },
    {
      path: "/settings",
      name: "Settings",
      icon: <BiCog size={25} />,
    },
    {
      path: "/logout",
      name: "Logout",
      icon: <IoLogOutOutline size={25} />,
    },
  ];
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="wrapper">
        <div
          style={{
            width: isOpen ? "320px" : "100px",
            padding: isOpen ? "20px 40px" : "20px 20px",
          }}
          className="sidebar"
        >
          <div className="top_section">
            <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
              <img src={logo} alt="icon" />
            </h1>
            <div
              style={{ marginLeft: isOpen ? "50px" : "0px" }}
              className="bars"
            >
              <BiMenu onClick={toggle} />
            </div>
          </div>
          {menuItem.map((item, index) => (
            <>
            <NavLink
              to={item.path}
              key={index}
              style={({ isActive }) =>
                isActive ? { color: " #1d4dca" } : { color: "#000" }
              }
              className="link"
            >
              <div className="icon">{item.icon}</div>
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
            <NavLink
            className="dropdown-link"
            style={({ isActive }) =>
              isActive ? { color: " #1d4dca" } : { color: "#000" }
            }
            to="/"
          >
            <div className="dropdown-icon"><IoLogOutOutline onClick={() => dispatch(logout())} size={25} /></div>
            <div
              className="dropdown-link_text"
              style={{ display: isOpen ? "block" : "none" }}
            >
              Logout
            </div>
              </NavLink>
            </>
          ))}
        </div>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Sidebar;
