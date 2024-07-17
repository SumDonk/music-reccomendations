import React, { useState, useEffect } from 'react';


export default function App() {
  const [tracks, setTracks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    getTracks();
  }, []);

async function getTracks() {
  try {
    const response = await fetch(`http://localhost:8080/tracks/recommendations`);
    const data = await response.json();
    console.log(data);
    setTracks(data);
  } catch (error) {
    console.error('Error fetching data track search:', error);
    return null;
  }
}

const AudioPlayer = ({url}) => {
  return (
    <div>
      <audio controls>
        <source src={url} type="audio/mpeg" />
      </audio>
    </div>
  );
};
{


  const handleNext = () => {
    if (currentIndex < tracks.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };



  return (
    <div>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
      <h1> Track: {JSON.stringify(tracks[0].track, null, 2)}</h1>
      <h1> Artist: {JSON.stringify(tracks[0].artist, null, 2)}</h1>
      <h1> Album: {JSON.stringify(tracks[0].album, null, 2)}</h1>
      <h1> Album Art:</h1> {JSON.stringify(tracks[0].artist, null, 2)} <img style={{ maxHeight: '200px', maxWidth: '200px' }} src={tracks[0].cover_art} alt={`Image of ${tracks[0].artist}`} />
       <h1>Audio Preview: </h1><AudioPlayer url={tracks[0].audio} />
    </div>
  );
};

}