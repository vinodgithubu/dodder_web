import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Products from './components/Products';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import Checkout from './components/Checkout';
import Register from './components/Register';
import Login from './components/Login';
import Account from './components/Account';
import Mydetails from './components/Profile/Mydetails';
import Childprof from './components/Profile/Childprof';
import Profile from './components/Profile/Profile';
import Manageaddress from './components/Profile/Manageaddress';
import Myorder from './components/Profile/Myorder';



class App extends Component {
  render() {
    return (
     <React.Fragment>
      <Navbar />
      
      <Switch>
      
       <Route exact path="/" component={Products}/>
       <Route path="/Details" component={Details}/>
       <Route path="/Cart" component={Cart}/>
       <Route path="/Checkout" component={Checkout}/>
       <Route path="/Login" component={Login}/>
       <Route path="/Register" component={Register}/>
       <Route path="/mydetails" component={Mydetails}/>
      <Route path="/myorder" component={Myorder}/>
       <Route path="/profile" component={Profile}/>
       <Route path="/childprof" component={Childprof}/>
       <Route path="/Account" component={Account}/>
       <Route path="/manageaddress" component={Manageaddress}/> 
       
       
       <Route component={Default}/>
     
      
       </Switch>
      <Modal />
      
     </React.Fragment>
    );
  }
}

export default App;


/*
<Route path="/mydetails" component={Mydetails}/>
      <Route path="/myorder" component={Myorder}/>
       <Route path="/profile" component={Profile}/>
       <Route path="/childprof" component={Childprof}/>
       <Route path="/manageaddress" component={Manageaddress}/> 
       
       
       
      import Mydetails from './components/Profile/Mydetails';
      import Childprof from './components/Profile/Childprof';
      import Profile from './components/Profile/Profile';
      import Manageaddress from './components/Profile/Manageaddress';
      import Myorder from './components/Profile/Myorder';
      
      */