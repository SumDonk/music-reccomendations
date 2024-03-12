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
                    <div style={{ backgroundColor: 'rgb(60, 110, 200)' }}>
                        <MDBRow>
                            <MDBCol md='5'>
                                <MDBCardImage src='https://th.bing.com/th/id/OIP.egF5T1Dcu38u6rwlgVojqAHaHa?rs=1&pid=ImgDetMain' height='400px' alt='...' fluid />
                            </MDBCol>
                            <MDBCol md='5'>
                                <MDBCardBody>
                                    <MDBCardTitle>Discover Artists</MDBCardTitle>
                                    <MDBCardText>
                                        Hrrrrrrrrrrrnnng Artists
                                    </MDBCardText>
                                    <MDBCardText>
                                        <MDBBtn>EXPLORE</MDBBtn>
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
                            <MDBCol md='5'>
                                <MDBCardBody>
                                    <MDBCardTitle>Discover Tracks</MDBCardTitle>
                                    <MDBCardText>
                                        mf uhhhhhh songs
                                    </MDBCardText>
                                    <MDBCardText>
                                         <MDBBtn>EXPLORE</MDBBtn>
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