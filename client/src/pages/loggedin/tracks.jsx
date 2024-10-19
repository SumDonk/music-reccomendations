import React from 'react';
import Image from "next/legacy/image";
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { useRouter } from 'next/router';
import styles from '../../styles/images.module.css';
import AudioPlayer from 'react-h5-audio-player';


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
        console.log(data);
        setTracks(data);
      } catch (error) {
        console.error('Error fetching data track search:', error);
      }
    };
    fetchData();
  }, []);


// const AudioPlayer = ({url}) => {
//   if (!url) {
//     return <div>No audio preview avaliable</div>;
//   }
//   return (
//     <div>
//       <audio controls>
//         <source src={url} type="audio/mpeg" />
//       </audio>
//     </div>
//   );
// };

const Player = ({url}) => (
  <AudioPlayer
    src={url}
    onPlay={e => console.log("onPlay")}
    // other props here
  />
);



  const handleNext = () => {
    if (currentIndex < tracks.length - 1) {
      setCurrentIndex(currentIndex + 1);
      console.log(currentIndex);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      console.log(currentIndex);
    }
  };
  return (
    <div>
    { <div>
      <Navbar></Navbar>
    <MDBCard style={{ backgroundColor: 'rgb(63, 63, 66)', height: '700px', margin:'5%', position: 'relative'}}>
      <MDBCardBody>
        <MDBCardText className='text-center'>
          Music Rex :D
        </MDBCardText>
        <div style={{display: 'flex', position: 'absolute', padding:"8%"}}>
        <div style={{position: 'relative'}}>
          <Image src={"/images/vinyl.png"}width={300} height={250} alt='logo'></Image>
          {<img src={tracks[currentIndex]?.cover_art} className={styles.rotate} width={200} height={200} alt='logo' style={{position: 'absolute', top: 28, left: 20, borderRadius: '50%'}}></img>}
        </div>
        <MDBCard style={{ maxWidth: '70%', backgroundColor: 'rgb(36, 36, 38)', display:'flex'}}>
          <MDBCardBody style={{minWidth:'50%'}}>
            <MDBCardTitle style={{fontSize: '30px', color: 'white'}}>
            <a>{tracks[currentIndex]?.track}</a> 
              </MDBCardTitle>

            <MDBCardText onClick={() => goArtistPage(artist)} style={{cursor: 'pointer'}}>
              <a>{tracks[currentIndex]?.artist}</a> 

            </MDBCardText>

            <MDBCardText onClick={() => goAlbumPage(album)} style={{cursor: 'pointer'}}>
              <small className='text-muted' onClick={() => goAlbumPage(album)}> 
               on <a href=''>{tracks[currentIndex]?.album}</a>
              </small>
            </MDBCardText>

            {!tracks[currentIndex]?.audio ? (
              <div style={{color: 'white'}}>Audio not avaliable for this track
              <a href={tracks[currentIndex]?.url}>Open Spotify</a>
              </div>
            ) : (
              <Player url={tracks[currentIndex]?.audio} />
            )}
          </MDBCardBody>
        </MDBCard>

        </div>

        <div style={{ position: 'absolute', bottom: 50, left: 50, cursor: 'pointer'}} onClick={handlePrevious}>
        <Image src={"/images/leftarrow.png"} width={50} height={50} alt='logo'style={{cursor: 'pointer'}}></Image>
        PREVIOUS
        </div>

        <div style={{ position: 'absolute', bottom: 50, right: 50, cursor: 'pointer'}} onClick={handleNext}>
        NEXT
        <Image src={"/images/rightarrow.png"} width={50} height={50} alt='logo' style={{cursor: 'pointer'}}></Image>
        </div>

      </MDBCardBody>
    </MDBCard>

    </div> }
    </div>
  );

}