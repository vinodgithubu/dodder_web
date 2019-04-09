import React, { Component } from 'react';
import Title from './Title';
import styled from 'styled-components';
import '../App.css';
import {Link} from 'react-router-dom';
import Facebook from './Facebook';
import { ButtonContainer } from './Button';
import { GoogleLogin } from 'react-google-login';


export default function Account() {
  const responseGoogle = (response) => {
    console.log(response);
  }
    return (
    <div className="py-5">

    
      <div className="container">
      <br></br>
      <br></br><br></br>
      <Title name="My Unplug-Stories" title="Account"/>
      <div className ="card">
      <div className="row">
     <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
              <h2 className="text-title text-uppercase text-muted">Dont Have an Account??</h2>
              <h6 className="text-title text-center text-muted">Signup with Unplug-stories</h6>
              <div className="col-6 mt-2 ml-sm ml-md-auto col-sm-8 text-capitalize text-left">
  

              <Link to="/Register"><br/>
              <ButtonContainer>
               REGISTER NOW
              </ButtonContainer>
            </Link>
            </div>



              <br/><h1> OR</h1><br/><br/>

              <h2 className="text-title text-uppercase text-muted">Signup easily using </h2><br/>
              <div className="row">
                <div className="col-3 ml-sm ml-md-auto col-sm-12 text-capitalize ">
              
                   <Facebook />
                   </div>

                   
                   
                <div className="col-3 ml-sm ml-md-auto col-sm-12 text-capitalize ">
                 
                 <GoogleLogin
                   clientId="390563865941-n4163ikvhgfk4pg1q6nr9c2ajg4c6hrb.apps.googleusercontent.com"
                   scope="profile email"
                   response_type= 'id_token permission'
          
                   onSuccess={responseGoogle}
                   onFailure={responseGoogle}
                  >
                  <i class="icon-google-plus"></i> 
                  <span className="">Google</span>
                  
                  </GoogleLogin>
               </div>
        </div>

        <br /><h1> OR</h1><br />

        <h2 className="ml-sm ml-md-auto text-title text-uppercase text-muted text-center">Login to</h2>
        <h6 className="text-title text-center text-muted">Your Unplug-stories Account</h6>
        <div className="col-6 mt-2 ml-sm ml-md-auto col-sm-8 text-capitalize text-left">  
        <Link to="/Login"><br/>
              <ButtonContainer>
             {' '} LOGIN
              </ButtonContainer>
          </Link>
        </div>
      
       
    
     </div>
     </div>
     </div>
      </div>
     </div>
  )
}


//CSS
const PrductWrapper = styled.div`
.card{
  border-color:transparent;
  transition:all 1s linear;



}
  `;