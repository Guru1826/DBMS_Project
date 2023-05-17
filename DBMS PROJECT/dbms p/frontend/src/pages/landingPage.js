import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import '../styles/LandingPage.css';
import { useNavigate } from "react-router";
function LandingPage() {
    
  return (
    
    <div className="landing-page">
      <nav className="lp_navbar">
        {/* <img src={logo} alt="logo" className="logo" /> */}
        <div className="lp_buttons">
          {/* <button className="login-button">Login</button> */}
          <MDBBtn className='lp_login-button'><a className='lp_a' href='/userLogin'>Login</a></MDBBtn>
          <MDBBtn className='lp_login-button'><a className='lp_a' href='/userRegister'>Register</a></MDBBtn>
          {/* <button className="register-button">Register</button> */}
        </div>
      </nav>
      <div className="lp_content">
        {/* <h1 className="title">Welcome to Career Development Website</h1>
        <p className="description">Explore various career options and find the right path for you</p> */}
        {/* <button className="cta-button">Get Started</button> */}
      </div>
      <footer className="lp_footer">
        &copy; 2023 Career Development Website
      </footer>
    </div>
  );
}

export default LandingPage;
