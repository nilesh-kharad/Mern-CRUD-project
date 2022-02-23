import React from 'react';
// import { NavLink } from 'react-router-dom';
var handleSubmit = (e) => {
  e.preventDefault();
 return fetch('/adds', {
    method: 'POST',
    body: JSON.stringify("#insertSingle"),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
    if (response.status == 200) {
      return response;
      window.location.reload();
    } else {
      console.log(response);
    }
  }).catch(err => err);


}
const Add = () => {
  return (
    <>
      <div className="container signup">
        <input type="checkbox" id="flip" />
        <div className="forms">
          <div className="form-content">
            <div className="login-form">
              <div className="title">Add New Profile</div>
              <form id="insertSingle" onSubmit={handleSubmit}>
                <div className="input-boxes">
                  <div className="input-box">
                    <input type="text" name="name" placeholder="Enter your Name" required />
                  </div>
                  <div className="input-box">
                    <input type="number" name="mobile" placeholder="Enter Mobile Number" maxLength="10" required />
                  </div>
                  <div className="input-box">
                    <input type="email" name="email" placeholder="Enter your Email" required />
                  </div>
                  <div className="input-box">
                    <input type="text" name="address" placeholder="Enter Address" required />
                  </div>
                  <div className="input-box">
                    <input type="text" name="country" placeholder="Enter Country" required />
                  </div>
                  <div className="input-box">
                    <input type="text" name="state" placeholder="Enter State" required />
                  </div>
                  <div className="input-box">
                    <input type="text" name="city" placeholder="Enter City" required />
                  </div>
                  <div className="input-box">
                    <input type="number" name="pincode" placeholder="Enter pincode" required />
                  </div>
                  <div className="input-box">
                    <input type="file" name="profile" placeholder="Choose Profile Photo" required />
                  </div>
                  <div className="button input-box">
                    <input type="submit" value="Add" />
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

export default Add


