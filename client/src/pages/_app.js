import "../styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';



export default function App({ Component, pageProps }) {
  useEffect(() => {
    document.title = 'Music Rex'; 
  }, []);
  return <Component {...pageProps} />;
}
