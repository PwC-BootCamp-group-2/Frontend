import React from 'react'
import "./Login.css";
import login from "../../assets/img/login.png";
export const Login = () => {
  return (
    <section className="logins"> 
        <div id="image">
          <img src={login} alt="" width={750} height={500} />    
        </div>       
        <form id="mylogin">
        <h2>Welcome Back</h2>
        <h4>Sign in to your account to continue</h4>
        <div id="email">
          <label>Email Address:</label>
          <input
            type="text"
            id="email"
            // value=""
            name="email"
          />
        </div>
        <div >
          <label >Password:</label>
          <input
            type="password"
            id="password"
            // value=""
            name="password"
          />
        </div>

       
        <button type="submit" id="signin">
          Sign In
        </button>
      

      <h5>Not Registered? <span>Sign Up</span></h5>
      </form>
    </section>
  )
}
