import React, { useState } from 'react';
import { MDBBtn, MDBInputGroup } from 'mdb-react-ui-kit';

export default function MyInput() {
  const [artists, setArtists] = useState([]); // Initialize as an empty array

  function handleChanges() {
    // Fetch data from your Flask endpoint (similar to your existing fetch call)
    fetch('http://localhost:8080/search/Nothing%20More')
      .then((response) => response.json())
      .then((data) => {
        setArtists(data); // Update the state with the array of artists
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  return (
    <>
      <MDBBtn onClick={handleChanges}>Fetch Artist Data</MDBBtn>
      {artists.map((artist, index) => (
        <div key={index}>
          <p>Artist: {artist.artist}</p>
          <img src={artist.artist_img} alt={`Image of ${artist.artist}`} />
          <p>Spotify link: <a href={artist.spotify_link}>{artist.spotify_link}</a></p>
        </div>
      ))}
    </>
  );
}
