import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";
import { toast } from "react-toastify";
import loginIcon from "../../assets/img/login.png";
import { login, reset } from "../../../features/Auth/authSlice";
import { StoreType } from "../../../types/redux";
import { useNavigate } from "react-router-dom";
import { LoginType } from "../../../types/form";
import { AppDispatch } from "../../../app/store";
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
      navigate("/dashboard");
    }
    if (isSuccess || user) {
      toast.error("Successful");
      setTimeout(() => {
        navigate("/dashboard");
      }, 5000);
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

  return (
    <section className="logins">
      <div id="image">
        <img id="imgg" src={loginIcon} alt="" width={750} height={500} />
      </div>
      <form id="mylogin" onSubmit={onSubmit}>
        <h2>Welcome Back</h2>
        <h4>Sign in to your account to continue</h4>
        <div id="email">
          <label>Email Address:</label>
          <input
            type="text"
            id="email"
            // value=""
            name="email"
            onChange={onChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            id="password"
            // value=""
            name="password"
            onChange={onChange}
          />
        </div>

        <button type="submit" id="signin">
          Sign In
        </button>
        <h6>Forget password?</h6>
        <h5>
          Not Registered? <span>Sign Up</span>
        </h5>
      </form>
    </section>
  );
};
