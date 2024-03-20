import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <div style={{display:'inlineflex'}}>
    <MDBCard style={{maxWidth:'40%', margin:'5%'}}>
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText style={{color:'red'}}>
          Some quick example text to build on the card title and make up the bulk of the card's content.
          let me test
        </MDBCardText>
        <MDBBtn>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    <MDBCard style={{maxWidth:'40%', margin:'5%'}}>
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText style={{color:'red'}}>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </div>
  );
}