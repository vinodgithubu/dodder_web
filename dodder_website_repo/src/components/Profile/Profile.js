import React, { Component } from 'react';
import Mydetails from "./Mydetails";
import Basicinfo from "./Basicinfo";
import Manageaddress from './Manageaddress';
import Childprof from './Childprof';
import Imageupload from './Imageupload';
import { Link } from "react-router-dom";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol ,MDBRow} from "mdbreact";
import { MDBListGroup, MDBListGroupItem, MDBContainer,MDBInput } from "mdbreact";


export default class Profile extends Component{
   count=0; 
    render(){
        
        {Profile.count=1}
        
        return(
                <React.Fragment >
                <Mydetails/>  
                 <MDBContainer  className="ml-auto" >
                     <MDBRow >
                         <MDBCol>
                         <MDBCard className="w-responsive ml-auto p-3 mt-2" style={{ float:"right",width: "52rem",top:"-403px"}} >
                            
                            <br/><MDBCardTitle >Personal Information </MDBCardTitle> 
                            <MDBCardBody>
                            <center><Imageupload/></center> 
                            <Basicinfo/>
                            </MDBCardBody>
                            </MDBCard> 
                         </MDBCol>
                     </MDBRow>
                     
                 </MDBContainer>
 
             </React.Fragment>

            


        )
    }
}
