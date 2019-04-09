import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from "mdbreact";

import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";


export default class Mydetails extends Component{
    render(){
        return(
            
                   
<div>
    
    <MDBCol style={{marginLeft:"22px"}}>
      <MDBCard style={{ width: "22rem" }}>
       
        <MDBCardBody>
          <MDBCardTitle >
              <Link to="/myorder" style={{color:"blue"}}> My Orders</Link> 
          </MDBCardTitle>
        </MDBCardBody>
      </MDBCard>
      <MDBCard style={{ width: "22rem" }}>
       
        <MDBCardBody>
          <MDBCardTitle style={{color:"blue"}}>
              Account Information

          </MDBCardTitle>
          
        <MDBListGroup>
            
            <MDBListGroupItem href="profile" hover>Profile</MDBListGroupItem>
            <MDBListGroupItem href="childprof" hover>Child Profile</MDBListGroupItem>
            <MDBListGroupItem href="manageaddress" hover>Manage Address</MDBListGroupItem>
        </MDBListGroup>

          
        </MDBCardBody>
      </MDBCard>
      <MDBCard style={{ width: "22rem" }}>
       
        <MDBCardBody>
          <MDBCardTitle>
              <Link to="/" style={{color:"blue"}}>Payment Details</Link> 

          </MDBCardTitle>
        
        </MDBCardBody>

        
      </MDBCard>

    </MDBCol>
    
</div>
                   
                   
                   
                  

                    
           

            
        )
    }
}


/*
<div>
                    <div className=" col-9 mx-auto col-md-5 col-lg-3 my-2 card p-3 " style={{float:"left"}}>
                        <Link to="/">
                        <h1>My orders</h1>
                        </Link>   
                    </div>
                    <br></br>
                    <div className=" col-9 mx-auto col-md-5 col-lg-3 my-2 card p-3 " style={{float:"left"}}>
                        <Link to="/">
                        <h1>Profile Info</h1>
                        </Link>  
                        <Link to="/">
                        <h1>Address</h1>
                        </Link>  
                    </div>

                    */