import React, { useState, useEffect } from 'react';
import SearchBar from '@/components/SearchBar'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/router';

export default function Main() {
  const [searchResults, setSearchResults] = useState([]);

  const router = useRouter();
  useEffect(() =>{
    
  });

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
    router.push('/search')
    
  };

  return (
    <div>
      <Navbar></Navbar>
      <SearchBar  onSearch={handleSearch} />
      <div style={{ display: 'flex' }}>
        <MDBCard style={{ maxWidth: '40%', margin: '5%'}}>
          <MDBCardBody style={{}}>
            <MDBCardTitle style={{fontSize:'40px'}}>Tracks</MDBCardTitle>
            <MDBCardText style={{ color: 'red' }}>
              
              {searchResults.map((result, index) => (
                <div key={index}>
                  <h1>{result.artist}</h1>
                  <img style={{ maxHeight: '200px', maxWidth:'200px'}} src={result.artist_img} alt={`Image of ${result.artist}`} />
                  <p>Spotify link: <a href={result.spotify_link}>{result.spotify_link}</a></p>
                </div>
              ))}
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        <MDBCard style={{ maxWidth: '40%', margin: '5%' }}>
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText style={{ color: 'red' }}>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );


}
