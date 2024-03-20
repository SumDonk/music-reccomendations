import React, { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css'
import SearchBar from '@/components/SearchBar';
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
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (term) => {
    // Fetch data from your Flask endpoint (similar to your existing fetch call)
    fetch(`http://localhost:8080/search/${term}`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResults(data); // Update the state with the array of artists
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    console.log(`Searching for: ${term}`);
  };

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
            <SearchBar onSearch={handleSearch}/>
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
