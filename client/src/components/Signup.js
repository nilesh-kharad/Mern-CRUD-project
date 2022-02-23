import React from 'react'
import { NavLink } from 'react-router-dom'

const Signup = () => {
  return (
    <>

      <div className="container signup">
        <input type="checkbox" id="flip" />
        <div className="forms">
          <div className="form-content">
            <div className="login-form">
              <div className="title">Register</div>
              <form action="/" method="post" id="insertSingle">
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fas fa-user"></i>
                    <input type="text" name="name" placeholder="Enter your Name" required />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-envelope"></i>
                    <input type="email" name="email" placeholder="Enter your Email" required />
                  </div>
                  <div className="input-box">
                    <i className="fab fa-black-tie"></i>
                    <input type="number" name="mobile" placeholder="Enter Mobile Number" maxLength="10" required />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock"></i>
                    <input type="password" name="password" placeholder="Enter your Password" required />
                  </div>
                  <div className="text-1"><NavLink to="/Forgot">Forgot password?</NavLink></div>
                  <div className="button input-box">
                    <input type="submit" value="Register" />
                  </div>
                  <div className="text sign-up-text">Already have an account? <label for="flip"><NavLink to="/Login">Login now</NavLink></label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup