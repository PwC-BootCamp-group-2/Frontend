import { Container, Col, Image } from "react-bootstrap";
import signup from "../../assets/img/user-signup.png";
import { useNavigate } from "react-router-dom";
import { useState, FC } from "react";
import "./Signup.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../app/store";
import { StoreType } from "../../../types/redux";
import { toast } from "react-toastify";
import { register } from "../../../features/Auth/authSlice";
import { UserRegisterType } from "../../../types/form";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
const Signup: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, isError, isLoading, isSuccess, message } = useSelector(
    (state: StoreType) => state.auth
  );
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
    if (password !== password2) {
      toast.error('Passwords do not match');
      return;
    } else {
      // const userData: UserRegisterType = {
      //   email,
      //   phoneNumber,
      //   password,
      //   companyName,
      //   role,
      //   address
      // };
      // dispatch(register(userData));
    }
  };
  
  return (
    <>
      <Container fluid className="signup-wrapper">
        <section className="signup-container">
          <Col xs={7}>
            <Image src={signup} className="signup-image" />
          </Col>
          {/* <Col xs={5}>
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
          </Col> */}
          <Col xs={5}>
            
              <div className="verification-modal">
                <div className="modal-closeBtn">
                  <FaTimesCircle size={20}/>
                </div>
                <div>
                  <FaCheckCircle size={150} color='#009052' />
                </div>
                <div>
                  <p className="link-text">A verification link has been sent to your email address. Kindly check to complete your registration
                  </p>
                </div>

                <form className="resend-link-form">
                  <input type='submit' className='link-btn' value='Resend Link' style={{ backgroundColor: '#009052', color: '#fff' }} />
                </form>
              </div>
            
          </Col>
        </section>
      </Container>
    </>
  );
};

export default Signup;
