import { IoLogOutOutline } from "react-icons/io5";
import { BiCog, BiWallet } from "react-icons/bi";
import { TbArmchair2 } from "react-icons/tb";
import {
  BsGrid,
  // BsEnvelope,
  BsCart,
  // BsXSquare,
  // BsCheckSquare,
  // BsFileEarmarkText,
  // BsChevronDown,
  // BsChevronUp,
} from "react-icons/bs";
import { SidebarItem } from "../../models/SidebarItem";

export const SidebarData: SidebarItem[] = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <BsGrid size={25} />,
  },
  {
    path: "/dashboard/booking",
    name: "Bookings",
    icon: <BsCart size={25} />,
    // iconClosed: <BsChevronDown />,
    // iconOpened: <BsChevronUp />,
    // subNav: [
    //   {
    //     name: "Complete Order",
    //     path: "/merchant-complete-order",
    //     icon: <BsCheckSquare size={25} />,
    //   },
    //   {
    //     name: "In Review",
    //     path: "/merchant-in-review",
    //     icon: <BsFileEarmarkText size={25} />,
    //   },
    //   {
    //     name: "Cancel",
    //     path: "/merchant-cancel",
    //     icon: <BsXSquare size={25} />,
    //   },
    // ],
  },
  // {
  //   path: "/merchant-messages",
  //   name: "Messages",
  //   icon: <BsEnvelope size={25} />,
  // },
  {
    path: "/dashboard/analytics",
    name: "Wallet",
    icon: <BiWallet size={25} />,
  },
  {
    path: "/search",
    name: "Spaces",
    icon: <TbArmchair2 size={25} />,
  },
  // {
  //   path: "/promotion",
  //   name: "Promotion",
  //   icon: <BsStar size={25} />,
  // },
  {
    path: "/dashboard/settings",
    name: "Settings",
    icon: <BiCog size={25} />,
  },
  {
    path: "/",
    name: "Logout",
    icon: <IoLogOutOutline size={25} />,
  },
];
