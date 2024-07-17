import React from 'react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/router';
import styles from '../../styles/images.module.css';


import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from 'mdb-react-ui-kit';



export default function App() {
  const [tracks, setTracks] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/tracks/recommendations`);
        const data = await response.json();
        setTracks(data);
      } catch (error) {
        console.error('Error fetching data track search:', error);
      }
    };
    fetchData();
  }, []);

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
      {/* <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
      <h1> Track: {JSON.stringify(tracks[currentIndex]?.track, null, 2)}</h1>
      <h1> Artist: {JSON.stringify(tracks[currentIndex]?.artist, null, 2)}</h1>
      <h1> Album: {JSON.stringify(tracks[currentIndex]?.album, null, 2)}</h1>
      <h1> Album Art:</h1> {JSON.stringify(tracks[currentIndex]?.artist, null, 2)} <img style={{ maxHeight: '200px', maxWidth: '200px' }} src={tracks[currentIndex]?.cover_art} alt={`Image of ${tracks[currentIndex]?.artist}`} />
      <h1>Audio Preview: </h1><AudioPlayer url={tracks[currentIndex]?.audio} /> */}
    { <div>
      <Navbar></Navbar>
    <MDBCard style={{ backgroundColor: 'rgb(0, 200, 200)', height: '700px', margin:'5%', position: 'relative'}}>
      <MDBCardBody>
        <MDBCardText className='text-center'>
          Music Rex :D
        </MDBCardText>
        <div style={{display: 'flex'}}>
        <div style={{position: 'relative'}}>
          <Image src={"/images/vinyl.png"}width={300} height={250} alt='logo'></Image>
          {<Image src={tracks[currentIndex]?.cover_art} className={styles.rotate} width={200} height={200} alt='logo' style={{position: 'absolute', top: 28, left: 20, borderRadius: '50%'}}></Image>}
        </div>
        <MDBCard style={{ maxWidth: '50%', backgroundColor: 'rgb(0, 200, 0)'}}>
          <MDBCardBody>
            <MDBCardTitle style={{fontSize: '30px'}}>Photograph //will be changing this to anonymous function to take to song page</MDBCardTitle>
            <MDBCardText onClick={() => getTracks()} style={{cursor: 'pointer'}}>
              Nickelback (with clickable link) //will be changing this to anonymous function to take to artist page

            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'> on All the Right Reasons (with clickable link)</small>
            </MDBCardText>
            <AudioPlayer url={"https://p.scdn.co/mp3-preview/fe00facde5b81d8f19789ac048fba91ae7f9d610?cid=1415bc9f0dec4978bb6c7042c401b37a"} />
          </MDBCardBody>
        </MDBCard>

        </div>

        <div style={{ position: 'absolute', bottom: 50, left: 50 }}>
        <Image src={"/images/leftarrow.png"} width={50} height={50} alt='logo' onClick={handlePrevious}></Image>
        PREVIOUS
        </div>

        <div style={{ position: 'absolute', bottom: 50, right: 50 }}>
        NEXT
        <Image src={"/images/rightarrow.png"} width={50} height={50} alt='logo' onClick={handleNext(tracks)}></Image>
        </div>

      </MDBCardBody>
    </MDBCard>

    </div> }
    </div>
  );
}
}