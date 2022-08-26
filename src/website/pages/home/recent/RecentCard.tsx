import React from "react";
import { Badge, Col, Container, Image } from "react-bootstrap";
import { BiPrinter, BiUser } from "react-icons/bi";
import { BsFillPrinterFill } from "react-icons/bs";
import { FaCoffee, FaWifi } from "react-icons/fa";
import { RecentSpaceListing } from "../../../../types/props";
import space from '../../../assets/img/space1.jpg'
import { useNavigate } from "react-router-dom";

const RecentCard = () => {
  const navigate = useNavigate()
  return (
    <>
    <Container>
        <section className="recent-spaces-container">
          
          <Col xs={4} className="recent-spaces-card">
            <div>
              <Image src={space} width="100%" height="100%" />
            </div>
            <div className="recent-spaces-content-wrapper">
              <div className="recent-spaces-content">
                <h4>Conference Room</h4>
                <span>Workstation NG - Maryland, Lagos</span>
              </div>
              <div>
                <FaWifi size={30} />
                <FaCoffee size={30} className="recent-spaces-icon" />
                <BiPrinter size={30} className="recent-spaces-icon" />
              </div>
              <div></div>
              <div className="recent-spaces-button-container">
              <button type="submit" className="mybtn" onClick={() => navigate("/search")}>View Now</button>
                <div>
                  <BiUser size={20} />
                  <span>20</span>
                </div>
              </div>
            </div>

          </Col>
          <Col xs={4} className="recent-spaces-card">
            <div>
              <Image src={space} width="100%" height="100%" />
            </div>
            <div className="recent-spaces-content-wrapper">
              <div className="recent-spaces-content">
                <h4>Conference Room</h4>
                <span>Workstation NG - Maryland, Lagos</span>
              </div>
              <div>
                <FaWifi size={30} />
                <FaCoffee size={30} className="recent-spaces-icon" />
                <BiPrinter size={30} className="recent-spaces-icon" />
              </div>
              <div></div>
              <div className="recent-spaces-button-container">
                <button type="submit" className="mybtn" onClick={() => navigate("/search")}>View Now</button>
                <div>
                  <BiUser size={20} />
                  <span>20</span>
                </div>
              </div>
            </div>

          </Col>

          <Col xs={4} className="recent-spaces-card">
            <div>
              <Image src={space} width="100%" height="100%" />
            </div>
            <div className="recent-spaces-content-wrapper">
              <div className="recent-spaces-content">
                <h4>Conference Room</h4>
                <span>Workstation NG - Maryland, Lagos</span>
              </div>
              <div>
                <FaWifi size={30} />
                <FaCoffee size={30} className="recent-spaces-icon" />
                <BiPrinter size={30} className="recent-spaces-icon" />
              </div>
              <div></div>
              <div className="recent-spaces-button-container">
              <button type="submit" className="mybtn" onClick={() => navigate("/search")}>View Now</button>
                <div>
                  <BiUser size={20} />
                  <span>20</span>
                </div>
              </div>
            </div>

          </Col>
        </section>
      </Container>
    </>
  );
};

export default RecentCard;
