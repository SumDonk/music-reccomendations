import React, { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar';
import styles from '../styles/Landing.module.css'
import { MDBBtn, MDBInputGroup } from 'mdb-react-ui-kit';


function index() {

  //const [artist ,setArtist] = useState([])


  /*fetch("http://localhost:8080/artists/")
  .then((response) => response.json())
  .then((data) => {});
*/
  return (
    <div>
      <Navbar></Navbar>
      <h1 className={`${styles.hero}`}>Welcome to Music Rex</h1>
      <section className={`${styles.hero}`}>
        <p>Welcome to Music Recs, your personal gateway to a world of music tailored just for you.
          Dive into a seamless musical journey, where every note resonates with your tastes and preferences.
          Our service connects with your Spotify profile to bring forth songs and artists that align with your unique listening history.
          Begin your adventure into the vast universe of music with just a click.</p>
        <img 
        src="https://th.bing.com/th/id/OIP.egF5T1Dcu38u6rwlgVojqAHaHa?rs=1&pid=ImgDetMain" 
        alt="Website Hero"
        height='300px' />
      </section>
      <h1 className={`${styles.headerStyle}`}>Personalized Music Exploration</h1>
      <section className={`${styles.hero}`}>
      <img 
        src="https://th.bing.com/th/id/OIP.egF5T1Dcu38u6rwlgVojqAHaHa?rs=1&pid=ImgDetMain" 
        alt="Website Hero"
        height='300px' />
        <p>Music Rex isn't just another music recommendation platform; it's a bespoke experience that adapts to your evolving music palate.
          Whether you're in search of the latest tracks or timeless classics, our intelligent system curates a selection that's as individual as you are.
          Explore top tracks in your country, delve into artist discoveries, or simply let the music find you. With Music Recs,
          your next favorite song is always at your fingertips.</p>
      </section>
      <h1 className={`${styles.headerStyle}`}>Connect with Your Favorites</h1>
      <section className={`${styles.hero}`}>
       <p>Ready to redefine the way you discover music? Music Recs invites you to log in with your Spotify account and unlock a world where music knows no bounds. 
       You'll be presented with your top artists and tracks of the month. It's not just about finding new songs—it's about creating a soundtrack for your life. 
       Find new songs today and let your musical journey begin!</p>
       <img 
        src="https://th.bing.com/th/id/OIP.egF5T1Dcu38u6rwlgVojqAHaHa?rs=1&pid=ImgDetMain" 
        alt="Website Hero"
        height='300px' />
      </section>
      <MDBInputGroup tag="form" style={{display: 'flex',padding:'5% 15% 5% 15%'}}>
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

