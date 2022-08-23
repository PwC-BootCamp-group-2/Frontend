import React from "react";
import { Badge, Col, Container, Image } from "react-bootstrap";
import { BiPrinter, BiUser } from "react-icons/bi";
import { BsFillPrinterFill } from "react-icons/bs";
import { FaCoffee, FaWifi } from "react-icons/fa";
import { RecentSpaceListing } from "../../../../types/props";
import space from '../../../assets/img/space1.jpg'

const RecentCard = () => {
  // const list: RecentSpaceListing[] = [
  //   {
  //     id: 1,
  //     image: space,
  //     type: "Business",
  //     location: "210 Zirak Road, Canada",
  //     capacity: 100,
  //     assets: [
  //       {
  //         icon: <FaWifi />
  //       },
  //       {
  //         icon: <FaCoffee />
  //       },
  //       {
  //         icon: <BiPrinter />
  //       }
  //     ]

  //   },
  //   {
  //     id: 2,
  //     image: space,
  //     type: "Coworking",
  //     location: "210 Zirak Road, Canada",
  //     capacity: 100,
  //     assets: [
  //       {
  //         icon: <FaWifi />
  //       },
  //       {
  //         icon: <FaCoffee />
  //       },
  //       {
  //         icon: <BiPrinter />
  //       }
  //     ]
  //   },
  //   {
  //     id: 3,
  //     image: space,
  //     type: "Meeting Rooms",
  //     location: "210 Zirak Road, Canada",
  //     capacity: 100,
  //     assets: [
  //       {
  //         icon: <FaWifi />
  //       },
  //       {
  //         icon: <FaCoffee />
  //       },
  //       {
  //         icon: <BiPrinter />
  //       }
  //     ]
  //   },
  //   {
  //     id: 4,
  //     image: space,
  //     type: "Cubicle",
  //     location: "210 Zirak Road, Canada",
  //     capacity: 100,
  //     assets: [
  //       {
  //         icon: <FaWifi />
  //       },
  //       {
  //         icon: <FaCoffee />
  //       },
  //       {
  //         icon: <BiPrinter />
  //       }
  //     ]
  //   },
  //   {
  //     id: 5,
  //     image: space,
  //     type: "Lobby",
  //     location: "210 Zirak Road, Canada",
  //     capacity: 100,
  //     assets: [
  //       {
  //         icon: <FaWifi />
  //       },
  //       {
  //         icon: <FaCoffee />
  //       },
  //       {
  //         icon: <BiPrinter />
  //       }
  //     ]
  //   },
  //   {
  //     id: 6,
  //     image: space,
  //     type: "Executive Suite",
  //     location: "210 Zirak Road, Canada",
  //     capacity: 100,
  //     assets: [
  //       {
  //         icon: <FaWifi />
  //       },
  //       {
  //         icon: <FaCoffee />
  //       },
  //       {
  //         icon: <BiPrinter />
  //       }
  //     ]

  //   },
  // ];

  return (
    <>
      {/* <div className="content grid3 mtop">
        <div className='box shadow'>
          <div className='img'>
            <img src={space} alt='space' />
          </div>
          <div className="details">
            <h4>Coworking</h4>
            <p>42, Oniru, Victoria Island Lagos</p>
            <div className="icon div">
              <FaWifi  />
              <FaCoffee />
              <BiPrinter />
            </div>
            <hr />
            <div className="flex">
              <button className="btn btn-warning">Book Now</button>
              <span><BiUser /><Badge>100</Badge></span>
            </div>
          </div>

        </div>
        <div className='box shadow'>
          <div className='img'>
            <img src={space} alt='space' />
          </div>
          <div className="details">
            <h4>Coworking</h4>
            <p>42, Oniru, Victoria Island Lagos</p>

            <div className="flex">
              <button className="btn btn-warning">Book Now</button>
              <span><BiUser /><Badge>100</Badge></span>
            </div>
          </div>
        </div>

        <div className='box shadow'>
          <div className='img'>
            <img src={space} alt='space' />
          </div>
          <div className="details">
            <h4>Coworking</h4>
            <p>42, Oniru, Victoria Island Lagos</p>

            <div className="flex">
              <button className="btn btn-warning">Book Now</button>
              <span><BiUser /><Badge>100</Badge></span>
            </div>
          </div>
        </div>
      </div> */}
      <Container>
        <section className="recent-spaces-container">
          <Col xs={4} className="m-4 p-2">
            <div>
              <Image src={space} width="100%" height="100%" />
            </div>
            <div className="recent-spaces-content">
              <h4>Conference Room</h4>
              <span>Workstation NG - Maryland, Lagos</span>
            </div>
            <div>
              <FaWifi size={30} className="recent-spaces-icon" />
              <FaCoffee size={30}  />
              <BiPrinter size={30} />
            </div>
            <div></div>
            <div>
              <button type="submit">View Now</button>
              <div>
                <BiUser size={20} />
                <span>20</span>
              </div>
            </div>
          </Col>
          <Col xs={4} className="m-4 p-2">
            <div>
              <Image src={space} width="100%" height="100%" />
            </div>
            <div>
              <h4>Conference Room</h4>
              <span>Workstation NG - Maryland, Lagos</span>
            </div>
            <div>
              <FaWifi size={20} />
              <FaCoffee size={20} />
              <BiPrinter size={20} />
            </div>
            <div></div>
            <div>
              <button type="submit">View Now</button>
              <div>
                <BiUser size={20} />
                <span>20</span>
              </div>
            </div>
          </Col>
          <Col xs={4} className="m-4 p-2">
            <div>
              <Image src={space} width="100%" height="100%" />
            </div>
            <div>
              <h4>Conference Room</h4>
              <span>Workstation NG - Maryland, Lagos</span>
            </div>
            <div>
              <FaWifi size={20} />
              <FaCoffee size={20} />
              <BiPrinter size={20} />
            </div>
            <div></div>
            <div>
              <button type="submit">View Now</button>
              <div>
                <BiUser size={20} />
                <span>20</span>
              </div>
            </div>
          </Col>

        </section>
      </Container>
    </>
  );
};

export default RecentCard;
