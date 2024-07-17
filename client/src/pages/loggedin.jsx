import React from "react";
import Navbar from "@/components/Navbar";
import { MDBBtn, MDBContainer, MDBTypography } from "mdb-react-ui-kit";
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';

export default function Basic() {
    return (
        <div>
            <Navbar></Navbar>

            <MDBContainer className="mt-5">
                <MDBCard style={{ maxWidth: '75%', marginLeft: '10%' }}>
                    <div style={{ backgroundColor: 'rgb(0, 200, 200)' }}>
                        <MDBRow>
                            <MDBCol md='5'>
                                <MDBCardImage src='https://th.bing.com/th/id/OIP.egF5T1Dcu38u6rwlgVojqAHaHa?rs=1&pid=ImgDetMain' height='400px' alt='...' fluid />
                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBCardBody>
                                    <MDBCardTitle>Discover Artists</MDBCardTitle>
                                    <MDBCardText style={{color:'black', fontSize:'24px'}}>
                                    Embark on a journey to discover musicians who resonate with your style. Click here to uncover new recommended artists tailored to your musical taste.
                                    </MDBCardText>
                                    <MDBCardText>
                                        <MDBBtn href="/loggedin/artists">EXPLORE</MDBBtn>
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </div>
                </MDBCard>
            </MDBContainer>

            <MDBContainer className="mt-5">
                <MDBCard style={{ maxWidth: '75%', marginLeft: '10%' }}>
                    <div style={{ backgroundColor: 'rgb(60, 110, 200)' }}>
                        <MDBRow>
                            <MDBCol md='5'>
                                <MDBCardImage src='https://th.bing.com/th/id/OIP.egF5T1Dcu38u6rwlgVojqAHaHa?rs=1&pid=ImgDetMain' height='400px' alt='...' fluid />
                            </MDBCol>
                            <MDBCol md='6'>
                                <MDBCardBody>
                                    <MDBCardTitle>Discover Tracks</MDBCardTitle>
                                    <MDBCardText style={{color:'black',fontSize:'24px'}}>
                                    Dive into a curated selection of tunes waiting just for you. Click here to explore new recommended tracks that hit all the right notes.
                                    </MDBCardText>
                                    <MDBCardText>
                                         <MDBBtn className="btn btn-info" style={{color: 'black'}} href="/loggedin/tracks">EXPLORE</MDBBtn>
                                    </MDBCardText>
                                </MDBCardBody>
                            </MDBCol>
                        </MDBRow>
                    </div>
                </MDBCard>
            </MDBContainer>
        </div>


    );
}