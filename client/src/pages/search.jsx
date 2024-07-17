import React, { useState, useEffect } from 'react';
import SearchBar from '@/components/SearchBar'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/router';

export default function Main() {
  const router = useRouter()
  async function getTrackSearch(searchTerm) {
    try {
      const response = await fetch(`http://localhost:8080/search/track/${searchTerm}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data track search:', error);
      return null;
    }
  }

  async function getArtistSearch(searchTerm) {
    try {
      const response = await fetch(`http://localhost:8080/search/artist/${searchTerm}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data from artist search:', error);
      return null;
    }
  }

  const [searchResults, setSearchResults] = useState([]);
  const [trackSearchResults, setTrackSearchResults] = useState([])
  const [showCard, setShowCard] = useState(false)


  /**
   * Asynchronous function to handle search operation.
   *
   * @param {string} term - The search term to look for.
   */
  const handleSearch = async (term) => {
    try {
      if (!term){
        return
      }
      const [artistData, trackData] = await Promise.all([
        getArtistSearch(term),
        getTrackSearch(term)
      ]);

      setSearchResults(artistData);
      setTrackSearchResults(trackData);
      setShowCard(true);
      console.log(`Searching for: ${term}`);
      router.push('/search')
    } catch (error) {
      console.error('Error during search', error)
    }
  }
  return (
    <div>
      <Navbar></Navbar>
      <SearchBar onSearch={handleSearch}/>
      <div style={{ display: 'flex' }}>
        {showCard && (
        <MDBCard className='visible' style={{ width: '40%', margin: '5%',backgroundColor:'lightblue'}}>
          <MDBCardBody>
            <MDBCardTitle style={{ fontSize: '40px' }}>Artists</MDBCardTitle>
            <MDBCardText style={{ color: 'red' }}>

              {searchResults.map((result, index) => (
                <div key={index}>
                  <h1>{result.artist}</h1>
                  <img style={{ maxHeight: '200px', maxWidth: '200px' }} src={result.artist_img} alt={`Image of ${result.artist}`} />
                  <p>Spotify link:</p> <a href={result.spotify_link}> Open Spotify</a>
                </div>
              ))}
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        )}
        {showCard && (
        <MDBCard style={{ width: '40%', margin: '5%', backgroundColor:'lightgreen'}}>
          <MDBCardBody>
            <MDBCardTitle style={{ fontSize: "40px" }}>Tracks</MDBCardTitle>
            <MDBCardText style={{ color: 'red' }}>
            {trackSearchResults.map((result, index) => (
                <div key={index}>
                  <h1>{result.track}</h1>
                  <img style={{ maxHeight: '200px', maxWidth: '200px' }} src={result.image} alt={`Image of ${result.name}`} />
                  <p>Spotify link:</p>
                  <a href={result.spotify_link}>Open Spotify</a>
                </div>
              ))}
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        )}
      </div>
    </div>
  );


}
