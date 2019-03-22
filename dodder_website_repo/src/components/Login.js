import React, { Component } from 'react';

import {Link} from 'react-router-dom';
import styled from 'styled-components';


const formValid = ({ formErrors, ...rest })  => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  Object.values(rest).forEach(val => {
    val == null && (valid = false);
  });

   return valid;
};
export default class Login extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      password: null,
      formErrors: {
          username: "",
          password: ""
      }
  };

}
handleSubmit = e => {
  e.preventDefult();

  if(formValid(this.state)) {
    console.log(`
    --SUBMITTING--
    User Name: ${this.state.username}
    Password: ${this.state.password} 
    `);
  } else {
    console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
  }
};
  
handlechange = e => {
  e.preventDefault();
  const { name, value } = e.target;
  let formErrors = this.state.formErrors;

   switch (name) {
     case "username":
     formErrors.username = 
     value.length < 3 ? "minimum 3 characaters required" : "";
     break;
     case "password":
     formErrors.password = 
     value.length < 3 ? "minimum 3 characaters required"
     : "";
     break;
     default:
    break;
}
 this.setState({ formErrors, [name]: value }, () => console.log(this.state));
};
render() {
  const { formErrors } = this.state;
    return (
        <Wrapper1>
      <div className="wrapper">
         <div className="form-wrapper">
          <h1>Login form</h1>
           <form onSubmit={this.handleSubmit} onvalidate>
           <div className="username">
             <label htmlFor="username">Username</label>
             <input 
               className={formErrors.username.length > 0 ? "error" : null}
               placeholder="User Name" 
               type="text" 
               name="username" 
               novalidate
              onChange={this.handlechange}
            />
            {formErrors.username.length > 0 && (
          <span className="errorMessage">{formErrors.username}</span>
           )}
         </div>
      
      <div className="password">
      <label htmlFor="password">Password</label>
      <input 
      className={formErrors.password.length > 0 ? "error" : null}
      placeholder="password" 
      type="password" 
      name="password" 
      novalidate
      onChange={this.handlechange}
      />
      {formErrors.password.length > 0 && (
          <span className="errorMessage">{formErrors.password}</span>
           )}
      </div>
      <div className="Submit">
      <button type="submit">Submit</button>
      <small>Forgot Password?</small>
    </div>
       
    </form>
    </div>
     </div>
     
   
     
     </Wrapper1>
  );
}
}

//CSS
const Wrapper1 = styled.div`
.wrapper {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #0B52A5
  }
  
  .form-wrapper {
    width: 300px;
    height: 350px;
    display: flex;
    flex-direction: column;
    padding: 20px 40px;
    border-radius: 10px;
    box-shadow: 0px 10px 50px #555;
    background-color: #ffffff;
  }
  
  form {
    
    display: flex;
    flex-wrap: wrap;
  }
  
  h1 {
    text-align: center;
    width: 100%;
    color: #111;
    font-weight: lighter;
    font-family: 'Gloria Hallelujah', cursive;
  }
  
  
  label {
   font-size: 0.8em;
   margin-bottom: 0.25em;
   color: #222;
   font-weight: lighter;
   font-family: 'Gloria Hallelujah', cursive;
  }
  
  input {
    padding: 10px 10px;
    border-radius: 5px;
    color: none;
    border: 1px solid blue_theme;
    transition: border 0.4s case-out;
    font-family: 'Gloria Hallelujah', cursive;
  }
  
  input::placeholder {
    font-size: 1.2em;
    font-weight: lighter;
    color: #999;
    font-family: 'Gloria Hallelujah', cursive;
  }
  
  input.error {
    border: 1px solid red;
  }
  
  .errorMessage {
    color: red;
    font-size: 0.75em;
    display: relatve;
  }
  
  
  
  
  .username,
  .password{
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }
  
  .username,
  .password{
    width: 100%;
  }
  
  .Submit {
   width: 100%;
   height: 50%;
   display: flex;
   flex-direction: column;
   align-items: center;
  }
  
  .Submit button{
    background-color: #0B52A5;
    color: #fff; 
    border: 2px solid #fff;
    width: 100%;
    height: 25%;
    margin-top: 1em;
    padding: 8px opx;
    font-size: 1em;
    font-weight: lighter;
    letter-spacing: 1px;
    margin-bottom: 0.25em;
    font-family: 'Gloria Hallelujah', cursive;
  }
  
  .Submit button:hover {
    color: #519e8a;
    background-color: #fff;
    border: 2px solid #519e8a;
  }
  `;