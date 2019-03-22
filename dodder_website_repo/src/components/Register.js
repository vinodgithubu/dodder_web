import React, { Component } from 'react';
import styled from 'styled-components';
import '../App.css';




const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-z0-9-]+(?:\[a-zA-Z0-9-]+)*$/);

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

export default class Register extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      mobile: null,
      address: null,
      pincode: null,
      password: null,
      confirmpassword: null,

      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        address: "'",
        pincode: "",
        password: "",
        confirmpassword: ""

      }
    };
  }

  handleSubmit = e => {
    e.preventDefult();

    if(formValid(this.state)) {
      console.log(`
      --SUBMITTING--
      First Name: ${this.state.firstName}
      Last Name: ${this.state.lastName} 
      Email: ${this.state.email}
      Mobile: ${this.state.mobile}
      Address: ${this.state.address}
      Pincode: ${this.state.pincode}
      Password: ${this.state.password}
      Confirmpassword: ${this.state.confirmpassword}
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
      case "firstName":
      formErrors.firstName = 
      value.length < 3 ? "minimum 3 characaters required" : "";
      break;
      case "lastName":
      formErrors.lastName = 
      value.length < 3 ? "minimum 3 characaters required"
      : "";
      break;

      case "mobile":
      formErrors.mobile = 
      value.length < 12 ? "minimum 12 digits required" : "";
      break;

      case "address":
      formErrors.address = 
      value.length < 100 ? "minimum 10 character required" : "";
      break;

      case "pincode":
      formErrors.pincode = 
      value.length < 6 ? "minimum 10 character required" : "";
      break;


      case "email":
      formErrors.email = 
      emailRegex.test(value) && value.length > 0
      ? ""
      : "Invalid Email Address";
      break;

      case "password":
      formErrors.password = 
      value.length < 6 ? "minimum 6 characaters required" : "";
      break;

      case "confirmpassword":
      formErrors.confirmpassword = 
      value.length < 6 ? "mnimum 6 characaters required" : "";
      break;

      default:
      break;
  }
   this.setState({ formErrors, [name]: value }, () => console.log(this.state));
 };

  render() {
  const { formErrors } = this.state;
    return (
      <div className="wrapper">
         <div className="form-wrapper">
          <h1>Registertion Form</h1>
           <form  className=" w-responsive"onSubmit={this.handleSubmit} onvalidate>
           <div className="firstName">
             <label htmlFor="firstName">First Name</label>
             <input 
               className={formErrors.firstName.length > 0 ? "error" : null}
               placeholder="First Name" 
               type="text" 
               name="firstName" 
               novalidate
              onChange={this.handlechange}
            />
            {formErrors.firstName.length > 0 && (
          <span className="errorMessage">{formErrors.firstName}</span>
           )}
         </div>
      
      <div className="lastName">
      <label htmlFor="lastName">Last Name</label>
      <input 
      className={formErrors.lastName.length > 0 ? "error" : null}
      placeholder="Last Name" 
      type="text" 
      name="lastName" 
      novalidate
      onChange={this.handlechange}
      />
      {formErrors.lastName.length > 0 && (
          <span className="errorMessage">{formErrors.lastName}</span>
           )}
      </div>

      <div className="mobile">
      <label htmlFor="mobile">Mobile No</label>
      <input 
      className={formErrors.mobile.length > 0 ? "error" : null}
      placeholder="mobile" 
      type="mobile" 
      name="mobile" 
      novalidate
      onChange={this.handlechange}
      />
      {formErrors.mobile.length > 0 && (
          <span className="errorMessage">{formErrors.mobile}</span>
           )}
      </div>

      <div className="pincode">
      <label htmlFor="pincode">Pinccode</label>
      <input 
      className={formErrors.pincode.length > 0 ? "error" : null}
      placeholder="pincode" 
      type="pincode" 
      name="pincode" 
      novalidate
      onChange={this.handlechange}
      />
      {formErrors.pincode.length > 0 && (
          <span className="errorMessage">{formErrors.pincode}</span>
           )}
      </div>

      <div className="address">
      <label htmlFor="address">address</label>
      <input 
      className={formErrors.address.length > 0 ? "error" : null}
      placeholder="address" 
      type="address" 
      name="address" 
      novalidate
      onChange={this.handlechange}
      />
      {formErrors.address.length > 0 && (
          <span className="errorMessage">{formErrors.address}</span>
           )}
      </div>
    
      <div className="email">
      <label htmlFor="email">Email</label>
      <input 
       className={formErrors.email.length > 0 ? "error" : null}
      placeholder="Email" 
      type="email" 
      name="email" 
      novalidate
      onChange={this.handlechange}
      />
      {formErrors.email.length > 0 && (
          <span className="errorMessage">{formErrors.email}</span>
           )}
     </div>

      <div className="password">
      <label htmlFor="password">Password</label>
      <input 
      className={formErrors.password.length > 0 ? "error" : null}
      placeholder="Password" 
      type="password" 
      name="password" 
      novalidate
      onChange={this.handlechange}
      />
      {formErrors.password.length > 0 && (
          <span className="errorMessage">{formErrors.password}</span>
           )}
      </div>
      
      <div className="confirmpassword">
      <label htmlFor="confirmpassword">Confirm Password</label>
      <input 
      className={formErrors.confirmpassword.length > 0 ? "error" : null}
      placeholder="Confirm Password" 
      type="password" 
      name="confirmpassword"
      novalidate
      onChange={this.handlechange}
      />
      {formErrors.confirmpassword.length > 0 && (
          <span className="errorMessage">{formErrors.confirmpassword}</span>
           )}
      </div>
      <div className="createAccount">
      <button type="submit">Register</button>
      <small>Already Have an Account?</small>
      </div>
      </form>
      </div>
       </div>
    );
  }
}

//CSS
const Wrapper = styled.div`
.wrapper {
    height: 150vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #0B52A5
  }
  
  .form-wrapper {
    width: 400px;
    height: 850px;
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
    border: 1px solid #cfcfcf;
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
    font-family: 'Gloria Hallelujah', cursive;
  }
  
  .firstName {
    margin-right: 1%;
  }
  
  .lastName {
    margin-left: 1%;
  }
  
  
  .firstName,
  .lastName,
  .mobile,
  .address,
  .pincode,
  .email,
  .password,
  .confirmpassword {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
  }
  
  .firstName,
  .lastName {
    width: 49%;
  }
  
  .email,
  .mobile,
  .address,
  .pincode,
  .password,
  .confirmpassword {
    width: 60%;
  }
  
  
  
  .createAccount {
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   font-family: 'Gloria Hallelujah', cursive;
  }
  
  .createAccount button{
    background-color: #0B52A5;
    color: #fff; 
    border: 2px solid #fff;
    width: 100%;
    margin-top: 1em;
    padding: 8px opx;
    font-size: 1em;
    font-weight: lighter;
    letter-spacing: 1px;
    margin-bottom: 0.25em;
    font-family: 'Gloria Hallelujah', cursive;
  }
  
  .createAccount button:hover {
    color: #519e8a;
    background-color: #fff;
    border: 2px solid #0B52A5;
    font-family: 'Gloria Hallelujah', cursive;
  }
  
  .createAccount small {
    color: #999;
    font-weight: lighter;
    font-family: 'Gloria Hallelujah', cursive;
  }
`;