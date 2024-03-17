import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";



export default function App({ Component, pageProps }) {
  useEffect(() => {
    document.title = 'Music Rex'; 
  }, []);
  return <Component {...pageProps} />;
}
