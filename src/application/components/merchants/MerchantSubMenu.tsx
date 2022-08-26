import { useState, FC } from "react";
import { IoLogOutOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { AppDispatch } from "../../../app/store";
import { logout } from "../../../features/Auth/authSlice";
import { SidebarItem } from "../../models/SidebarItem";
import "./MerchantSidebar.css";


type SidebarLinkProps = {
  item: SidebarItem;
};
const MerchantSubMenu: FC<SidebarLinkProps> = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const dispatch = useDispatch<AppDispatch>();


  const showSubnav = () => setSubnav(!subnav);

  const onClick = (e: any) => {
    if (e === "/") {
      dispatch(logout());
    } else {
      return
    }
    item.subNav && showSubnav()
  }
  return (
    <>
      <NavLink
        to={item.path}
        onClick={() => onClick(item.path)}
        className="link"
        style={({ isActive }) =>
          isActive ? { color: " #1d4dca" } : { color: "#000" }
        }
      >
        <div className="icon">{item.icon}</div>
        <div
          className="link_text"
          style={{ display: item.isOpen ? "block" : "none" }}
        >
          {item.name}
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
          </div>
      </NavLink>
      {subnav &&
        item?.subNav?.map((item, index) => {
          return (

            <NavLink
              className="dropdown-link"
              style={({ isActive }) =>
                isActive ? { color: " #1d4dca" } : { color: "#000" }
              }
              to={item.path}
              key={index}
              
            >
              <div className="dropdown-icon">{item.icon}</div>
              <div
                className="dropdown-link_text"
                style={{ display: item.isOpen ? "block" : "none" }}
              >
                {item.name}
              </div>
              </NavLink>
          );
        })}
    </>
  );
};
export default MerchantSubMenu;

// const MerchantSidebarItem = () => {
//   return <div></div>;
// };

// export default MerchantSidebarItem;
