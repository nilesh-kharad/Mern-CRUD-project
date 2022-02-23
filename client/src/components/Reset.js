import React from 'react'
import { NavLink } from 'react-router-dom';

const Reset = () => {
  return (
    <>
        <div className="container reset">
        <input type="checkbox" id="flip" />
        <div className="forms">
            <div className="form-content">
                <div className="forgot-form">
                    <div className="title">Reset</div>
                    <form id="insertSingle">
                        <div className="input-boxes">
                            <div className="input-box">
                                <i className="fas fa-envelope"></i>
                                <input type="gmail" name="mailID"  placeholder="ex@gmail.com" required />
                            </div>  
                            <div className="input-box">
                                <i className="fas fa-key"></i>
                                <input type="number" name="OTP" placeholder="Enter your OTP" required />
                            </div>
                            <div className="input-box">
                                <i className="fas fa-unlock-alt"></i>
                                <input type="password" name="password" placeholder="Enter new password" required />
                            </div>
                            <div className="button input-box">
                                <input for="flip" type="submit" value="Reset Password" />
                            </div>
                            <div className="text-1 sign-up-text">Have an account? <label> <NavLink to="/managerLogin">Login</NavLink> </label>
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

export default Reset