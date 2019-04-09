import React, { Component } from 'react'
import Mydetails from './Mydetails';
import Profile from './Profile';
import Manageaddress from './Manageaddress';
import Imageupload from './Imageupload';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol ,MDBRow} from "mdbreact";
import { MDBListGroup, MDBListGroupItem, MDBContainer,MDBInput } from "mdbreact";
import BasicInfo from './Basicinfo';
export default class Childprof extends Component{
  count=0;   
    render(){
        {Childprof.count=1}
       
        
        return(
            
            <React.Fragment >
                <Mydetails/>  
                 <MDBContainer  className="ml-auto" >
                     <MDBRow >
                         <MDBCol>
                         <MDBCard class="w-responsive text-center ml-auto p-3 mt-2" style={{ float:"right",width: "50rem",top:"-394px"}} >
                         <br/><br/><MDBCardTitle >&nbsp;&nbsp;Child Information </MDBCardTitle>
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
