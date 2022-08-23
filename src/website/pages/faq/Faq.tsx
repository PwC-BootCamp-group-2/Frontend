import { Container, Col } from "react-bootstrap";

const Faq = () => {
  return (
    <>
      <Container>
        <section>
          <h2>Frequently Asked Questions</h2>
        </section>
        <section>
          <Col xs={3}></Col>
          <Col xs={9}></Col>
        </section>
      </Container>
    </>
  );
};

export default Faq;
