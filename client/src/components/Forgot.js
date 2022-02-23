import React from 'react'
import { NavLink } from 'react-router-dom';

const forgot = () => {
  return (
    <>
        <div className="container forgot">
        <input type="checkbox" id="flip" />
        <div className="forms">
            <div className="form-content">
                <div className="forgot-form">
                    <div className="title">Forgot</div>
                    <form id="insertSingle">
                        <div className="input-boxes">
                            <div className="input-box">
                                <i className="fas fa-envelope"></i>
                                <input type="email" name="mailID" placeholder="Enter your email" required />
                            </div>
                            <div className="button input-box">
                                <input for="flip" type="submit" value="Send OTP" />
                            </div>
                            <div className="row ">
                            <div className="col-md-6">
                                <div className="text-1 sign-up-text">Have an account? <label> <NavLink to="/Login">Login</NavLink>
                                    </label>
                                </div>
                            </div>  
                            <div className="col-md-6">
                                <div className="text-1 sign-up-text">Reset Password <label> <NavLink to="/Reset">Reset</NavLink>
                                    </label>
                                </div>
                            </div>  
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

export default forgot