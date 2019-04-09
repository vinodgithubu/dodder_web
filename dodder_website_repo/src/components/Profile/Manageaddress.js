import React, { Component } from 'react'
//import FormUserDetails from './FormUserDetails'
import Mydetails from './Mydetails';
import Profile from './Profile';
import Childprof from './Childprof';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol ,MDBRow} from "mdbreact";
import { MDBListGroup, MDBListGroupItem, MDBContainer,MDBInput } from "mdbreact";
import BasicInfo from './Basicinfo';


export default class Manageaddress extends Component{
  count=0;   
    render(){
        {Manageaddress.count=1}   
        return(      
            <React.Fragment >
                <Mydetails/>  
                 <br/><br/><br/><br/><MDBContainer  className="ml-auto" >
                     <MDBRow >
                         <MDBCol>
                            <MDBCard class="w-responsive text-center ml-auto p-3 mt-2" style={{ float:"right",width: "50rem",top:"-394px"}} >
                                <MDBCardBody> 
                                    <BasicInfo/> 
                                </MDBCardBody>
                            </MDBCard> 
                         </MDBCol>
                     </MDBRow> 
                 </MDBContainer>
             </React.Fragment>
        )
    }
}
