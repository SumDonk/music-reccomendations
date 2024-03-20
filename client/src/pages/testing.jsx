import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBRow>
      <MDBCol style={{color:'red', width:'50%'}} md='3'>
        md="3"
        what if i continue 
      </MDBCol>
      <MDBCol style={{color:'red', width:'50%'}} md='6'>
        md="6"
      </MDBCol>
    </MDBRow>
  );
}