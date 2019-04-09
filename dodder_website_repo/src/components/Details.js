import React, { Component } from 'react';
import {ProductConsumer} from '../Context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
         const{
           id,
           company,
           price,
           img,
           info,
           title,
           inCart
          }= value.detailProduct;
         return(
           <div className="container py-5">
           <div className="row">
           <div className="col-10 mx-auto
           text-center text-slanted text-blue my-5">
           <h1>{title}</h1>
           </div>
           </div>

          { /*Product information*/}
          <div className="row">
            <div className="col-10 mx-auto col-md-6 my-3">
              <img src={img} className="img-fluid" alt="product"/>
            </div>
            <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
              <h2>Name: {title}</h2>
              <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
              Unplug Stories bought to you by : <span className="text-uppercase">
                {company}</span>
              </h4>
              <h4 className="text-blue">
              <strong>
                price:<span>₹</span>
                {price}
              </strong>
              </h4>
              <p className="text-capitalize font-weight-bold mt-3 mb-1">
              Product information:
              </p>
              <p className="text-muted lead">{info}</p>
              
              {/* Button */}
              <Link to="/">
              <ButtonContainer>Back to Books</ButtonContainer>
              </Link>
              <ButtonContainer cart
              disabled={inCart?true:false}
              onClick={()=>{
                value.addToCart(id);
                value.openModal(id);

              }}
              >
                {inCart ? "inCart" : "add to cart"}
              </ButtonContainer>

              <div>
              <Link to="/Preview">
              <br/><br/><h3>Click here to view your book</h3>
              </Link>
              </div>
            </div>
           

          </div>
           </div>
         )
        }}
      </ProductConsumer>
    );
  }
}

