import React from 'react'


export default function CartItem({item,value}) {
  const {id,title,img,price,total,count} = item;
  const {increment,decrement,removeItem} = value;

  return (
    <div className="row my-1 text-capitalize text-center" >
    <div className="col-10 mx-auto col-lg-2">
    <img src={img} style ={{width:'5rem', height:'5rem'}}
    className="img-fluid" alt="product" />
    </div>
    <div className ="col-10 mx-auto col-lg-2">
    <span className="d-lg-none">Book :</span>
    {title}
    \
    </div>
    <div className="col-10 mx-auto col-lg-2">
    <span className="d-lg-none">Price :</span>
    {price}
    </div>
    <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
    <div className="d-flex ">
    </div>
    </div>
    </div>
  )
}

