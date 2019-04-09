import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components'
import {ButtonContainer} from "./Button";
import {ProductConsumer} from '../Context';


export default class Navbar extends Component {
  render() {

    return (
      <div>
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5" fixed="top" >
      <Link to='/'>
      <img src={logo} alt="store"
      className="navbar-brand" />
      </Link>
      
      <div class="nav-link" >
      <Link to="/">
      <a href ='#Home'> Home </a>
      </Link>
      </div>
    
     
      <div class="nav-link">
      <a href ='#Product'> Products </a>
      </div>
      
      
      <div class="nav-link">
      <a href ='#Contact'> Contact </a>
      </div>
      
      
      <div class="nav-link">
      <a href ='#About'> About </a>
      </div>
      
    
      <Link to="/cart" className="ml-auto"> 
      <ButtonContainer>
      <span className="mr-2">
      <i className="fas fa-cart-plus"/>
        Cart 
        <ProductConsumer>
        {value => {
          const {cart} = value;
          if (cart.length > 0) {
          return (
           
            <React.Fragment>
           :{ cart.length }
              </React.Fragment>

             );
            }
        }}
        </ProductConsumer>
      </span>
      </ButtonContainer>
      </Link>
      <Link to='/mydetails' className="mr-2"> 

        <img src="data:image/png;base64,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"/>
  
        </Link>
      
    
  
      
      </NavWrapper>
      </div>
    )
  }
}



const NavWrapper = styled.nav` 
background:var(--mainBlue);
top:0;
position: fixed;
z-index:100;
width:100%;
.nav-link{
  color:var(--mainWhite)!important;
  font-size:1.3rem;
  
  text-transform:capitalize!important;
}`;




