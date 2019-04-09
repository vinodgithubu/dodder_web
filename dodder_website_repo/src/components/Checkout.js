import React from 'react'
import Title from './Title';
import PropTypes from 'prop-types';
import { ButtonContainer } from './Button';
import PayPalButton from './Cart/PayPalButton';
import { GoogleLogin } from 'react-google-login';


export default function Checkout() {
  
  const responseGoogle = (response) => {
    console.log(response);
  }
  return (
    
      <div className ="col-9 mx-auto col-md-6 col-lg-6 ">
      <br></br><br></br><br></br><br>
      
      
      </br><Title name ="Your" title="Payments" />  

      <div className ="card">
      <div className ="row">
      <div className="col-6 mx-auto col-md-9 my-9 text-uppercase text-muted mt-3 mb-2">
      <h2>Payment option</h2>
      
      <h5 className="text-title text-uppercase text-muted mt-3 mb-2">
       Choose your payment mode</h5>
      <ButtonContainer>
      Cash on delivery
      </ButtonContainer><br/>
      <ButtonContainer>
      NetBanking
      </ButtonContainer><br/>
      
      <PayPalButton />

     <br></br><br></br><br></br><br></br>
       
      
        <GoogleLogin
          clientId="390563865941-n4163ikvhgfk4pg1q6nr9c2ajg4c6hrb.apps.googleusercontent.com"
          scope="profile email"
          response_type= 'id_token permission'
          
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          
        />
        
      
      
      </div>
      </div>
      </div>
</div>
      
      
      
);
}




