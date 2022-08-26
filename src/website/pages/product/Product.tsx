import { Container, Col, Button, Image, Badge, Modal } from 'react-bootstrap';
import { BsStarFill } from 'react-icons/bs';
import { DatePicker } from 'antd';
import './Product.css';
import singleProduct from '../../assets/img/single-product.png';
import smallSingleproduct from '../../assets/img/small-single-product.png';
import moment from 'moment';

const { RangePicker } = DatePicker;

function range(start: any, end: any) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  console.log(result);
  return result;
}

function disabledDate(current: any) {
  // Can not select days before today and today
  return current && current < moment().endOf('day');
}

function disabledDateTime() {
  return {
    disabledHours: () => [1,3],
    disabledMinutes: () => range(30, 60),
    disabledSeconds: () => [55, 56],
  };
}
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
                <RangePicker
                  disabledDate={disabledDate}
                  disabledTime={disabledDateTime}
                  showTime
                />

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
