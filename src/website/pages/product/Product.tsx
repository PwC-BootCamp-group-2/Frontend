import { Container, Col, Button, Image, Badge } from "react-bootstrap";
import { BsStarFill } from "react-icons/bs";
import "./Product.css";
import singleProduct from "../../assets/img/single-product.png";
import smallSingleproduct from "../../assets/img/small-single-product.png";
// import ProductDetails from "../../components/productDetails/ProductDetails";
const Product = () => {
  return (
    <>
      <Container fluid>
        <section className="product-container">
          <Col xs={7} className="product-image">
            <Image src={singleProduct} width="100%" height="100%"></Image>
          </Col>
          <Col xs={5}>
            <Image src={smallSingleproduct} width="100%"></Image>
            <div className="product-details">
              {/* <ProductDetails
                spaceType="Bella Bellagio Hotel & Casino"
                location="Las vegas, United Status"
              /> */}
              <h4>Bella Hotel & Casino</h4>
              <span className="product-location">Las Vegas, United States</span>
              <div>
                <BsStarFill size={20} color=" #FFC329" />
                <BsStarFill size={20} color=" #FFC329" />
                <BsStarFill size={20} color=" #FFC329" />
                <BsStarFill size={20} color=" #FFC329" />
              </div>
              <span className="review-text">4.8 Stars (12.5k Reviews)</span>
              <div className="divider"> </div>
              <div className="product-description">
                <h4>About</h4>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit luctus
                  mus, leo taciti vel convallis fermentum tempor congue. Nec
                  turpis pellentesque lectus iaculis curae arcu nam, taciti
                  libero.
                </span>
              </div>
              <div className="mt-3">
                <h4>Facilities</h4>
                <div className="assets-container">
                  <Badge as="button">Wifi</Badge>
                  <Badge className="assets" as="button">
                    Printer
                  </Badge>
                  <Badge className="assets" as="button">
                    Gym
                  </Badge>
                  <Badge className="assets" as="button">
                    Parking Lot
                  </Badge>
                </div>
                <div>
                  <Button type="submit" className="btn btn-primary">
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </section>
      </Container>
    </>
  );
};

export default Product;
