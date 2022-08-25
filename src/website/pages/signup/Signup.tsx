import { Container, Col, Image } from 'react-bootstrap';
import signup from '../../assets/img/user-signup.png';
import { useNavigate } from 'react-router-dom';
import { useState, FC, useEffect } from 'react';
import './Signup.css';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../app/store';
import { StoreType } from '../../../types/redux';
import { toast } from 'react-toastify';
import { register, reset } from '../../../features/Auth/authSlice';
import { UserRegisterType } from '../../../types/form';
import Spinner from '../../../application/components/Spinner';
const Signup: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user, isError, isLoading, isSuccess, message } = useSelector(
    (state: StoreType) => state.auth
  );
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
    password: '',
    password2: '',
    companyName: '',
    role: '',
  });

  const {
    fullName,
    email,
    phoneNumber,
    address,
    password,
    password2,
    companyName,
    role,
  } = formData;
  const navigate = useNavigate();
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      toast.success(message);
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        address: '',
        password: '',
        password2: '',
        companyName: '',
        role: '',
      });
      // navigate('/');
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);
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
      toast.error("Passwords do not match");
      return;
    } else {
      const userData: UserRegisterType = {
        email,
        phoneNumber,
        password,
        companyName,
        role,
        address,
        fullName,
      };
      dispatch(register(userData));
    }
  };
<<<<<<< HEAD
  if (isLoading) {
    return <Spinner />;
  }
=======
>>>>>>> 9220a69cd454967e43754707fd0b2886e5758819

  return (
    <>
      <Container fluid className="signup-wrapper p-0">
        <section className="signup-container">
          <Col xs={6}>
            <Image src={signup} className="signup-image" />
          </Col>
          <Col xs={6}>
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
                        id="fullName"
                        name="fullName"
                        value={fullName}
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
                      <label htmlFor="companyName">Company Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="companyName"
                        name="companyName"
                        value={companyName}
                        placeholder="Enter Comapny Name"
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
                    <div className="form-group signup-input">
                      <label htmlFor="email">Role:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="role"
                        name="role"
                        value={role}
                        placeholder="Select your Role"
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
