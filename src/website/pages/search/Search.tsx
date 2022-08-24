import { Container, Col, Image, Button, Form } from "react-bootstrap";
import searchBg from "../../assets/img/search-bg.png";
import "./Search.css";

const Search = () => {
  return (
    <>
      <Container fluid className="p-0">
        <section className="d-flex">
          <Col xs={6}>
            <Image src={searchBg} className="search-bg" />
          </Col>
          <Col xs={6} className="search-section">
            <div>
              <div>
                <span className="search-title">Type</span>
                <div className="search-type-container gap-2">
                  <span className="search-type">Dedicated Desk</span>
                  <span className="search-type">Large Desk</span>
                </div>
                <div>
                  <span className="search-title">Select a location</span>
                  <div className="select-location">
                    <Form.Select aria-label="Default select example">
                      <option>Select a Location</option>
                      <option value="1">11, aAdeboye SowandemOkota </option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>

                  <div className="gap-2 search-type-container">
                    <span className="search-title">Facilities</span>
                    <div className="mt-2">
                      <span className="search-facilities">Wifi</span>
                      <span className="search-facilities">Gym</span>
                      <span className="search-facilities">Swimming Pool</span>
                      <span className="search-facilities">Parking Lot</span>
                    </div>
                  </div>
                  <div>
                    <button className="search-button" type="submit">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </section>
      </Container>
    </>
  );
};

export default Search;
