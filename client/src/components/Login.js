import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div className="container login">
        <input type="checkbox" id="flip" />
        <div className="forms">
            <div className="form-content">
                <div className="login-form">
                    <div className="title">Login</div>
                    <form id="insertSingle">
                        <div className="input-boxes">
                            <div className="input-box">
                                <i className="fas fa-envelope"></i>
                                <input type="text" name="mail" placeholder="Enter your email" required />
                            </div>
                            <div className="input-box">
                                <i className="fas fa-lock"></i>
                                <input type="password" name="password" placeholder="Enter your password" required />
                            </div>
                            <div className="text-1"><NavLink to="/Forgot">Forgot password?</NavLink></div>
                            <div className="button input-box">
                                <input type="submit" value="Login" />
                            </div>
                            <div className="text sign-up-text">Don't have an account? <label for="flip"><NavLink to="/">Sigup now</NavLink></label>
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

export default Login