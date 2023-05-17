import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Context } from "../index";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';

export default function UserNavbar() {

    const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(Context);

  const logoutHandler = async () => {
    setLoading(true);
    try {
      const {data}=await axios.get("http://localhost:4000/api/v1/users/logout", {
        withCredentials: true,
      });

      toast.success(data.message);
      setIsAuthenticated(false);
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthenticated(true);
      setLoading(false);
    }
  };

  const [showNavSecond, setShowNavSecond] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/userHomePage'>Home</MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavSecond}>
          <MDBNavbarNav>
            {/* <MDBNavbarLink active aria-current='page' href='#'>Home</MDBNavbarLink> */}
            <MDBNavbarLink active aria-current='page' href='/pocView'>POC</MDBNavbarLink>
            <MDBNavbarLink active aria-current='page' href='/userProfile'>Profile</MDBNavbarLink>
            <MDBNavbarLink active aria-current='page' href='/userAppliedCompanies'>Applied</MDBNavbarLink>
            <MDBNavbarLink disabled={loading} onClick={logoutHandler} active aria-current='page' href='/userLogin'>Logout</MDBNavbarLink>
            
            {/* <MDBNavbarLink href=''>Disabled</MDBNavbarLink> */}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}