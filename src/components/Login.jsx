import React from 'react'
import loginGraphic from "../assets/Login.png"
// import emailIcon from "../assets/mail-01.svg"
import loginIcon from "../assets/login-03.svg"
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <>
      <div className="login-component">
        <div className="login-card">
          <h1>Login</h1>
          <p>Enter your credentials to access admin dashboard</p>
          <div className="input-container">
            <span>Email Address</span>

            <input type="email" placeholder="eg: xyz@gmail.com" required={true} />
          </div>
          <div className="input-container">
            <span>Password</span>
            <input type="password" placeholder='Your Password' required={true} />
          </div>
          <Link style={{ textDecoration: "none" }} to="/dashboard"><button>Login <img src={loginIcon} alt="loginIcon" /></button></Link>

        </div>
        <img className="illustration" src={loginGraphic} alt="loginGraphic" />
      </div>
    </>
  )
}

export default Login
