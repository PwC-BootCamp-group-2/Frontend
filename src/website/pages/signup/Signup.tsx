import { Container, Col, Button, Image } from "react-bootstrap";
import signup from "../../assets/img/user-signup.png";
import { useNavigate } from "react-router-dom";
import { useState, FC, ChangeEventHandler } from "react";
import "./Signup.css";
const Signup: FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    password: "",
    password2: "",
  });
  const { name, email, phoneNumber, address, password, password2 } = formData;
  const navigate = useNavigate();
  const onChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <Container fluid className="signup-wrapper">
        <section className="signup-container">
          <Col xs={7}>
            <Image src={signup} className="signup-image" />
          </Col>
          <Col xs={5}>
            <div className="signup-form-container">
              <h3 className="signup-form-title">Create an account</h3>
              <p className="signup-form-title">
                Complete your information in the form below
              </p>
              <div>
                <section className="form">
                  <form onSubmit={onSubmit}>
                    <div className="form-group signup-input">
                      <label htmlFor="name">Full Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={name}
                        placeholder="Sarah Obasi"
                        onChange={onChange}
                      />
                    </div>
                    <div className="form-group signup-input">
                      <label htmlFor="email">Email:</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={email}
                        placeholder="Enter your Email"
                        onChange={onChange}
                      />
                    </div>
                    <div className="form-group signup-input">
                      <label htmlFor="email">Address:</label>
                      <input
                        type="address"
                        className="form-control"
                        id="address"
                        name="address"
                        value={address}
                        placeholder="11, Adeboye Sowande Street"
                        onChange={onChange}
                      />
                    </div>
                    <div className="form-group signup-input">
                      <label htmlFor="email">Phone Number:</label>
                      <input
                        type="phoneNumber"
                        className="form-control"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={phoneNumber}
                        placeholder="08063323914"
                        onChange={onChange}
                      />
                    </div>
                    <div className="form-group signup-input">
                      <label htmlFor="email">Password:</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        value={password}
                        placeholder="Enter your Password"
                        onChange={onChange}
                      />
                    </div>
                    <div className="form-group signup-input">
                      <label htmlFor="email">Confirm Password:</label>
                      <input
                        type="password"
                        className="form-control"
                        id="password2"
                        name="password2"
                        value={password2}
                        placeholder="Confirm your Password"
                        onChange={onChange}
                      />
                    </div>
                    <div className="form-group">
                      <button type="submit" className=" signup-button">
                        Submit
                      </button>
                    </div>
                  </form>
                </section>
              </div>
            </div>
          </Col>
        </section>
      </Container>
    </>
  );
};

export default Signup;