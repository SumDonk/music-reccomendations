// pages/index.js (or any other page)
import { useState } from 'react';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [artistData, setArtistData] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(`localhost:8080/search/${encodeURIComponent(searchTerm)}`);
      const data = await response.json();
      setArtistData(data); // Assuming the response structure matches your example data
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for an artist or song here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {artistData && (
        <div>
          <img src={artistData.artist_img} alt={artistData.artist} />
          <p>Artist: {artistData.artist}</p>
          <p>Genres: {artistData.genres.join(', ')}</p>
          <a href={artistData.spotify_link} target="_blank" rel="noopener noreferrer">
            Spotify Link
          </a>
        </div>
      )}
    </div>
  );
}