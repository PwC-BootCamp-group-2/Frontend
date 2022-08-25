import clients from "../../assets/img/clients.png";
import aboutStory from "../../assets/img/about-story.png";
import ourTeam from "../../assets/img/our-team.png";
import { Container, Col, Image, Button } from "react-bootstrap";
import "./About.css";
import Typical from "react-typical";
const AboutUs = () => {
  return (
    <>
      <Container fluid className="p-0">
        <section className="about-us">
          <Col className="about-hero-container">
            <Col xs={6} className="about-hero">
              <section>
                <p className="about-hero-pill">Our Mission</p>
                <h1 className="about-hero-title">
                  <Typical
                    steps={["Create", 5000, "Build", 5000]}
                    loop={Infinity}
                    className="animated-text"
                    wrapper="b"
                  />
                  a world where people work to make a{" "}
                  <b className="bold-text">life</b>, not just a{" "}
                  <b className="bold-text">living.</b>
                </h1>
              </section>
            </Col>
            <Col xs={6} className="mx-3">
              <Image src={ourTeam} className="about-hero-image" />
            </Col>
          </Col>
          <Col className="about-story-container">
            <Col xs={6} className="about-story-image-container">
              <Image src={aboutStory} className="about-story-image" />
            </Col>
            <Col xs={6} className="about-story">
              <div>
                <h2 className="fw-bolder">Our Story</h2>
                <span className="about-story-content">
                  SpaceHub is the first online “Office Hoteling” app in Nigeria.
                  We first launched as “Space Hub” on the 7th of January 2016 as
                  a savings-only platform. spent.
                </span>{" "}
                <br></br>
                <br></br>
                <span className="about-story-content">
                  For 3 years, we offered only savings to our users. Then in
                  April of 2019, we rebranded to “SpaceHub” and began offering
                  direct investment opportunities to users in addition to
                  savings.
                </span>
                <br></br>
                <br></br>
                <span className="about-story-content">
                  5 years on, we have continued to deliver excellent service to
                  our 1,000,000 users and counting, helping them manage their
                  finances with simplicity and transparency. Combined, our users
                  save & invest billions of Naira every month that they would
                  have instead spent.
                </span>
              </div>
            </Col>
          </Col>{" "}
          <Col className="clients">
            <Image src={clients} width="100%" height="100%" />
          </Col>
        </section>
      </Container>
    </>
  );
};

export default AboutUs;
