import React from 'react'
import { FeaturedSpacesType } from "../../../../types/props";
// import train from "./images/img-1.jpg";
import rooms from "../../../assets/img/single-spaces.svg";
import { FaHome, FaHotel } from 'react-icons/fa';
import { BiHome, BiHomeAlt } from 'react-icons/bi';
import { BsPiggyBank } from 'react-icons/bs';
import { IoHomeSharp } from 'react-icons/io5';


const FeaturedCard = () => {
  const featured: FeaturedSpacesType[] = [
    {
      icon: <FaHome size={20} />,
      cover: rooms,
      name: "Business",
      total: "122 Available",
    },
    {
      icon: <FaHotel size={20} />,
      cover: rooms,
      name: "Meeting Rooms",
      total: "300 Available",
    },
    {
      icon: <BiHomeAlt size={20} />,
      cover: rooms,
      name: "Lobby",
      total: "80 Available",
    },
    {
      icon: <BiHome size={20} />,
      cover: rooms,
      name: "Cubicle",
      total: "80 Available",
    },
    {
      icon: <BiHome size={20} color='green' />,
      cover: rooms,
      name: "Executive Suite",
      total: "80 Available",
    }
  ];
  return (
    <>
      <div className='content grid5 mtop'>
        {featured.map((items, index) => (
          <div className='box' key={index}>
            {/* <i className={items.icon} /> */}
            <div className='icon-div'>{items.icon}</div>
            <h4>{items.name}</h4>
            <label>{items.total}</label>
          </div>
        )
        )}
      </div>
    </>
  )
}

export default FeaturedCard