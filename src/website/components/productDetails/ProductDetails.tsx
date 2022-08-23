import { ProductDetailsType } from "../../../types/props";
import { Badge, Button } from "react-bootstrap";
const ProductDetails = ({
  spaceType,
  location,
  icon,
  reviews,
  description,
  assets,
}: ProductDetailsType) => {
  return (
    <div>
      <h5>{spaceType}</h5>
      <span>{location}</span>
      <span>{icon}</span>
      <span>{reviews}</span>
      <div>-----------</div>
      <div>
        <h5>About</h5>
        <span>{description}</span>
      </div>
      <div>
        <Badge>{assets.name}</Badge>
        <Badge>{assets.name}</Badge>
        <Badge>{assets.name}</Badge>
        <Badge>{assets.name}</Badge>
      </div>
      <div>
        <Button>Book Now</Button>
      </div>
    </div>
  );
};

export default ProductDetails;
