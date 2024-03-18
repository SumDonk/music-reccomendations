import React, { useState } from 'react';
import SearchBar from '@/components/SearchBar'

export default function Main() {
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
    <div>
      <SearchBar onSearch={handleSearch} />
      {searchResults.map((result, index) => (
        <div key={index}>
          <h1>Artist: {result.artist}</h1>
          <img style={{maxHeight:'200px'}} src={result.artist_img} alt={`Image of ${result.artist}`} />
          <p>Spotify link: <a href={result.spotify_link}>{result.spotify_link}</a></p>
        </div>
      ))}
    </div>
  );
}

const imageStyle = {
  mexHeight: "200px"
}