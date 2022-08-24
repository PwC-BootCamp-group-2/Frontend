import { Container, Col, Image, Button } from "react-bootstrap";
import searchBg from "../../assets/img/search-bg.png";
const Search = () => {
  return (
    <>
      <Container fluid className="p-0">
        <section>
          <Col>
            <Image src={searchBg} className="search-bg" />
          </Col>
          <Col></Col>
        </section>
      </Container>
    </>
  );
};

export default Search;
