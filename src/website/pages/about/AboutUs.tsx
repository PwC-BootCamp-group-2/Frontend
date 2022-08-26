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
                  SpaceHub is the an “Office Hoteling” application in Nigeria.
                  Our platform is aimed at solving the problem of spaces and
                  office resources.We are also giving individuals the
                  opportunity to lease their spaces.
                </span>{" "}
                <br></br>
                <br></br>
                <span className="about-story-content">
                  When we birthed SpaceHub, we wanted to build more than
                  beautiful, shared office spaces. We wanted to build a
                  community. A place you join as an individual, 'me', but where
                  you become part of a greater 'we'. A place where we’re
                  redefining success measured by personal fulfillment.
                </span>
                <br></br>
                <br></br>
                <span className="about-story-content">
                  In years to come, we have hope to have continued to deliver
                  excellent service to our users , helping them to live a
                  work-balanced life We hope to increase the user experience
                  using the metaverse to tour the office space before booking.
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
