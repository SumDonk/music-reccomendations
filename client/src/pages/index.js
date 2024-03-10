import React, { useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '@/components/Navbar.jsx';



function index() {
  //const [artist ,setArtist] = useState([])


    /*fetch("http://localhost:8080/artists/")
    .then((response) => response.json())
    .then((data) => {});
*/
    return (
      <div>
      <Navbar></Navbar>
      <h2>hi</h2>
      </div>
);
}

export default index;

