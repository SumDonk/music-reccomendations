import React, { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse,
  MDBBtn,
  MDBInputGroup
} from 'mdb-react-ui-kit';



function Navbar() {
  const [user, setUser] = useState(null);
  const [openNavSecond, setOpenNavSecond] = useState(false);

  useEffect(() => {
    // Fetch user data here and update the state
    // setUser({ name: 'John Doe', profilePicture: '/path/to/profile/picture' });
  }, []);

  return (
    <MDBNavbar expand='lg' dark bgColor='dark' style={{maxHeight:'70px'}}>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'><img
          src="https://th.bing.com/th/id/OIP.egF5T1Dcu38u6rwlgVojqAHaHa?rs=1&pid=ImgDetMain"
          alt="About Us"
          height='50'
        />

        </MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNavSecond(!openNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openNavSecond}>
          <MDBNavbarNav>
            <MDBNavbarLink active aria-current='page' href='http://localhost:3000/'>Home</MDBNavbarLink>
            <MDBNavbarLink href='http://localhost:3000/loggedin/tracks'>Tracks</MDBNavbarLink>
            <MDBNavbarLink href='http://localhost:3000/loggedin/artists'>Artists</MDBNavbarLink>
            <MDBInputGroup style={{marginLeft:'20%',maxWidth:'40%'}} tag="form">
              <input 
              className='form-control' 
              placeholder="Search for an artist or song here" 
              aria-label="Search" 
              type='Search' 
              style={{textAlign:'center'}} />
              <MDBBtn href='http://localhost:3000/search'>Search</MDBBtn>
            </MDBInputGroup>
            <MDBNavbarLink style={{marginLeft:'25%', maxHeight:'45px'}} href='http://localhost:3000/loggedin/'>
              <MDBBtn>Login</MDBBtn>
              </MDBNavbarLink>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default Navbar;
