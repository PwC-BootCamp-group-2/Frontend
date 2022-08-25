import { useState } from "react";
import { Container, Col, Button, Image, Card } from "react-bootstrap";
import { BsQuestionCircleFill, BsFillEnvelopeFill } from "react-icons/bs";
import { BiChevronRight } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import "./contact.css";
import contactForm from "../../assets/img/contact-form.webp";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/6ee35fd0-2226-11ed-a969-f1ede4dc5ccf";

const Contact = () => {
  const { width, height } = useWindowSize();
  const [status, setStatus] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Anything you need to inject dynamically
    const injectedData = {
      DYNAMIC_DATA_EXAMPLE: 123,
    };
    const inputs = e.target.elements;
    const data: any = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    Object.assign(data, injectedData);

    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        // It's likely a spam/bot request, so bypass it to validate via captcha
        if (response.status === 422) {
          //   Object.keys(injectedData).forEach((key) => {
          //     const el = document.createElement("input");
          //     el.type = "hidden";
          //     el.name = key;
          //     el.value = injectedData[key];

          //     e.target.appendChild(el);
          //   });

          e.target.submit();
          throw new Error("Please finish the captcha challenge");
        }

        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        return response.json();
      })
      .then(() => setStatus("We'll be in touch soon."))
      .catch((err) => setStatus(err.toString()));
  };

  if (status) {
    return (
      <>
        <Confetti width={width} height={height} />

        <Col className="response-container">
          <section className="response-card">
            <div className="text-2xl">Thank you!</div>
            <div className="text-md">{status}</div>
          </section>
        </Col>
      </>
    );
  }

  return (
    <>
      <Container fluid className="p-0">
        <section>
          <Col>
            <div className="contact-hero-section">
              <div className="contact-hero-content">
                <h1>Contact Us</h1>
              </div>
            </div>
          </Col>
          <Col className="contact-content-section">
            <section className="contact-cards-container">
              <Col xs={4} className="contact-cards">
                <Card style={{ width: "18rem" }} className="single-cards">
                  <Card.Body>
                    <BsQuestionCircleFill size={25} color="#AD1B02" />
                    <Card.Title className="contact-card-title">
                      Have a question?
                    </Card.Title>

                    <Card.Text className="contact-card-copy">
                      Checkout our FAQ section for tons of answers to some of
                      our most common customer questions. It is the fastest way
                      to get the answer you're looking for.
                    </Card.Text>
                    <Card.Link href="#" className="contact-card-link">
                      Visit Our Help Center <BiChevronRight size={20} />
                    </Card.Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={4} className="contact-cards">
                <Card style={{ width: "18rem" }} className="single-cards">
                  <Card.Body>
                    <BsFillEnvelopeFill size={25} color="#AD1B02" />
                    <Card.Title className="contact-card-title">
                      Reach out to directly
                    </Card.Title>

                    <Card.Text className="contact-card-copy">
                      Send us an email via{" "}
                      <a href="mailto:support@spacehub.com">
                        support@spacehub.com
                      </a>{" "}
                      and ring our phone on{" "}
                      <a href="tel:018889990">01 888 9990</a> and a
                      representative will attend to you as soon as possible
                    </Card.Text>
                    <Card.Link href="#" className="contact-card-link">
                      Send an Email <BiChevronRight size={20} />
                    </Card.Link>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={4} className="contact-cards">
                <Card style={{ width: "18rem" }} className="single-cards">
                  <Card.Body>
                    <MdLocationOn size={25} color="#AD1B02" />
                    <Card.Title className="contact-card-title">
                      Locate us
                    </Card.Title>

                    <Card.Text className="contact-card-copy">
                      With Spacehub now available in over 200,000 locations
                      across Nigeria, our agents are always minutes away to
                      cater to your every workspace need
                    </Card.Text>
                    <Card.Link href="#" className="contact-card-link">
                      Find a Spacee near you <BiChevronRight size={20} />
                    </Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            </section>
          </Col>
          <Col className="contact-form-container">
            <Col xs={7}>
              <div>
                <Image src={contactForm} className="contact-form-image" />
              </div>
            </Col>
            <Col xs={5} className="contact-form">
              <form
                action={FORM_ENDPOINT}
                onSubmit={handleSubmit}
                method="POST"
                target="_blank"
              >
                <h4>Get In touch </h4>
                <p className="text-center">
                  Need anything? We'll be more than happy to offer you our help
                </p>
                <div className="form_grp">
                  <label className="form_label" htmlFor="name">
                    Full Name:
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    id="input"
                    name="name"
                    required
                  />
                </div>
                <div className="form_grp">
                  <label className="form_label" htmlFor="email">
                    Email:
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    id="input"
                    name="email"
                    required
                  />
                </div>
                <div className="form_grp">
                  <label className="form_label" htmlFor="message">
                    Message:
                  </label>
                  <textarea
                    placeholder="Your message"
                    id="message"
                    name="message"
                    required
                  />

                  <button type="submit" id="submit">
                    {" "}
                    Send a message{" "}
                  </button>
                </div>
              </form>
            </Col>
          </Col>
          <Col>
            <div className="contact-divider"></div>
          </Col>
        </section>
      </Container>
    </>
  );
};

export default Contact;
