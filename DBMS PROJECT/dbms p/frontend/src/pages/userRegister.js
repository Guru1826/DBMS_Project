
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput 
}
from 'mdb-react-ui-kit';
import "../styles/Login.css"
import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { Context, server } from "../index";
import toast from "react-hot-toast";

function UserRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [branch,setBranch] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(Context);

  const submitHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/users/new",
        {
          name,
          email,
          branch,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      toast.success(data.message);
      setIsAuthenticated(true);
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthenticated(false);
      setLoading(false);
    }
  };

  if (isAuthenticated) return <Navigate to={"/userHomePage"} />;
  return (
    <MDBContainer className="my-5">

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp' alt="login form" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                {/* <span className="h1 fw-bold mb-0">Logo</span> */}
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>User Register here</h5>
              <form onSubmit={submitHandler}>
                <MDBInput wrapperClass='mb-4' value={name} onChange={(e)=>setName(e.target.value)} required label='Name' id='formControlLg' type='name' size="lg"/>
                <MDBInput wrapperClass='mb-4' value={email} onChange={(e)=>setEmail(e.target.value)} required label='Email address' id='formControlLg' type='email' size="lg"/>
                <MDBInput wrapperClass='mb-4' value={branch} onChange={(e)=>setBranch(e.target.value)} required label='Branch' id='formControlLg' type='branch' size="lg"/>
                <MDBInput wrapperClass='mb-4' value={password} onChange={(e)=>setPassword(e.target.value)} required label='Password' id='formControlLg' type='password' size="lg"/>

              <MDBBtn className="mb-4 px-5" color='dark' size='lg'>REGISTER</MDBBtn>
              {/* <a className="small text-muted" href="#!">Forgot password?</a> */}
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Already have an account? <a href="/userLogin" style={{color: '#393f81'}}>Login here</a></p>
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Are you an Admin? <a href="/adminLogin" style={{color: '#393f81'}}>Login here</a></p>
              </form>
              <div className='d-flex flex-row justify-content-start'>
                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a>
              </div>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default UserRegister;