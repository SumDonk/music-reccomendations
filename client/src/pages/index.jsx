import React, { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import styles from '../styles/Landing.module.css'
import { MDBBtn, MDBInputGroup, MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';


function index() {
  return (
    <div>
      <Navbar></Navbar>
      <center><h1>Welcome to Music Rex</h1></center>
      <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
        <img src='https://th.bing.com/th/id/OIP.egF5T1Dcu38u6rwlgVojqAHaHa?rs=1&pid=ImgDetMain' className='d-block w-100' alt='...' height={"800px"}></img>
        <MDBCarouselCaption>
          <h5>Explore Tracks</h5>
          <p>Like photograph by nickelback</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src='https://th.bing.com/th/id/R.17941e06c262d8e7436a02de5ec0e355?rik=BsUzMBRlsyePQg&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f25800000%2fNickelback-nickelback-25842802-1920-1200.jpg&ehk=aiGOGy%2bAwa6HFmpUNfnBaxcy%2fw7s0DWP3nx3c3KBxds%3d&risl=&pid=ImgRaw&r=0' className='d-block w-100' alt='...' height={"800px"}></img>
        <MDBCarouselCaption>
          <h5>Explore Artists</h5>
          <p>Like nickelback and the like</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={3}>
        <img src='https://th.bing.com/th/id/OIP.3YqSIsN77i-mN2TNUY9_4gHaHY?w=197&h=197&c=7&r=0&o=5&pid=1.7' className='d-block w-100' alt='...' height={"800px"}></img>
        <MDBCarouselCaption>
          <h5>Login with spotify</h5>
          <p>Login with Spotify and explore music reccomendations specifc to your taste</p>
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>
      <MDBInputGroup tag="form" style={{display: 'flex',padding:'2.5% 15% 0% 15%'}}>
          <input className='form-control' style={{height:"40px"}} placeholder="Search for an artist or song here" aria-label="Search" type='Search' />
          <MDBBtn outline>Search</MDBBtn>
          <div style = {{display: 'inflineflex' ,textAlign:'center', paddingLeft:'40px'}}>
      <MDBBtn style={{height:'40px'}}>Or login with spotify</MDBBtn>
      </div>
        </MDBInputGroup>
        
    </div>
  );
}

export default index;

