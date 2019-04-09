import React, { Component } from 'react'
import Product from './Product';
import Title from './Title';
import ScrollableAnchor from 'react-scrollable-anchor'
import {ProductConsumer} from '../Context';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SwiftSlider from 'react-swift-slider';
 

const data =  [
  {'id':'1','src':'img/product-2.png'},
  {'id':'2','src':'img/product-3.png'},
  {'id':'3','src':'img/product-4.png'},
  {'id':'4','src':'img/product-5.png'},
  {'id':'5','src':'img/product-6.png'}
];

export default class Products extends Component {

  render() {
   
    return (
    
      <React.Fragment>
      <div>
      <ScrollableAnchor id={'Home'}>
      
      <div className="py-5">
      <div className="container">
      <br></br>
      <Title name="Unplug" title="Stories"/>
     
      <div className="jumbotron text-center" >
          
    <Carousel autoPlay >

    <div >
      <img src="img/1.png" />
      
    </div>
    <div>
      <img src="img/1.png" />
  
    </div>
    <div>
      <img src="img/1.png" />
    
    </div>
    </Carousel>
        
    </div>
      </div>
      </div>
    
      </ScrollableAnchor>
      
     </div>

      <div>
      <ScrollableAnchor id={'Product'}>
      <div className="py-5">
      <div className="container">
      <Title name="Our" title="Products"/>
      <div className="row">
      <ProductConsumer>
      {value=> {
        return value.productList.map(product =>{
          return <Product key={product.id} product=
          {product}/>;
        })

      }}
      
 
      </ProductConsumer>
      </div>
      </div>
      </div>
      </ScrollableAnchor>
      </div>
      
      <div>
      <div className="py-5">
      <div className="container">
      <ScrollableAnchor id={'Contact'}>
        <div><Title name="Contact" title="Us"/>
        <div className="row">
        <h2>
        Contact us if you have any query.
        </h2>
        
        <span class="glyphicon glyphicon-map-marker"></span> Bangaluru, Karnataka<br/>
        <span class="glyphicon glyphicon-phone"></span> +91 9742795502><br/>
        <span class="glyphicon glyphicon-envelope"></span> contact@unplugstories.com<br/>
        </div>
        </div>
        
      </ScrollableAnchor>
      </div>
      </div>
      </div>


      <div className="py-5">
      <div className="container">
      <ScrollableAnchor id={'About'}>
      <div><Title name="About" title="Us"/>
      <div className="row">
      <h2>About Company Page</h2>
      <SwiftSlider data={data}/> 
      </div>
      </div>
      
      </ScrollableAnchor>
    </div>
    </div>
    
    
      </React.Fragment>

      
      //<Product/>
      
    )
  }
}
