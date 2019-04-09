import React, { Component } from 'react'
import {storeProducts, detailProduct} from './data';
const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
state={
    productList:[],
    detailProduct:detailProduct,
    cart: storeProducts,
    modalOpen:false,
    modalProduct:detailProduct,
    cartSubTotal:0,
    cartTax:0,
    cartTotal:0

};
componentDidMount(){
    this.setproductList();
}
setproductList = ()=>{
let tempProducts =[];
storeProducts.forEach(item =>{
const singleItem ={...item};
tempProducts=[...tempProducts,singleItem];
});
this.setState(()=>{
    return {productList:tempProducts};
});
};

getItem = id =>{
const product =this.state.productList.find(item =>item.id===id);
return product;

};
handleDetail =(id) => {
    const product = this.getItem(id);
    this.setState(()=>{
      return {detailProduct:product}
    })
};
addToCart = id => {
    let tempProducts =[...this.state.productList];
    const index = tempProducts.indexOf(this.getItem(id));
    const product =tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price =product.price;
    product.total = price;
    this.setState(()=>{
      return { productList:tempProducts,cart:[...this.state.cart,product]};
    },()=>{console.log(this.state);      
    });
};
OpenModal = id => {
  const product = this.getItem(id);
  this.setState(()=>{
    return {modalProduct: product, modalOpen:true};

  });
};
closeModal =()=>{
  this.setState(()=>{
    return {modalOpen: false};
  });
};
 increment =(id) =>{
   console.log('increment');
 }
 decrement =(id) =>{
  console.log('decrement');
}
removeItem = (id) =>{
  console.lod('item removed');
}
clearCart =() =>{
  console.log('clear cart');
}
  render() {
    return (
      <ProductContext.Provider value={{
     ...this.state,
        handleDetail:this.handleDetail,
        addToCart:this.addToCart,
        OpenModal:this.OpenModal,
        closeModal:this.closeModal,
        increment:this.increment,
        decrement:this.decrement,
        removeItem:this.removeItem,
        clearCart:this.clearCart

      }}>
      {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};