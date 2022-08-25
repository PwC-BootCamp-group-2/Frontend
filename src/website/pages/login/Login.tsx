import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";
import { toast } from "react-toastify";
import loginIcon from "../../assets/img/login.png";
import { login, reset } from "../../../features/Auth/authSlice";
import { StoreType } from "../../../types/redux";
import { useNavigate } from "react-router-dom";
import { LoginType } from "../../../types/form";
import { AppDispatch } from "../../../app/store";
import Spinner from "../../../application/components/Spinner";
export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { user, isError, isLoading, isSuccess, message } = useSelector(
    (state: StoreType) => state.auth
  );
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    const userData: LoginType = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className="login-container">
      <Col xs={6}>
        <Image src={loginIcon} alt="" width="100%" height="100%" />
      </Col>
      <Col xs={6} className="form-container">
        <form onSubmit={onSubmit} className="form">
          <h4>
            <b>Welcome Back!</b>
          </h4>
          <h6>Sign in to your account to continue</h6>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              type="text"
              id="email"
              className="form-control "
              placeholder="Email Address"
              // value=""
              name="email"
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group mt-4">
            <div className="d-flex justify-content-between ">
              <label>Password:</label>
              <h6>Forget password?</h6>
            </div>

            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your Password"
              // value=""
              name="password"
              onChange={onChange}
              required
            />
          </div>
          <div className="form-group mt-4">
            <button type="submit" className="login-button">
              Sign In
            </button>
          </div>

          <h6 className="mt-2">
            Not Registered?{" "}
            <span>
              <Link to="/signup" className="bold-title">
                Sign Up
              </Link>
            </span>
          </h6>
        </form>
      </Col>
    </section>
  );
};
