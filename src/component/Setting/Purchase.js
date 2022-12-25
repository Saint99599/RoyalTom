import React from 'react'
import { useState, useContext } from "react";
import { CartContext } from "../function/CartContext";
import PurchaseList from './PurchaseList'

const Purchase = () => {

  const cart = useContext(CartContext);
  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

  return (
    <div className="Detail">
          <div className="header">
            <p>Purchase</p>
          </div>
          <hr></hr>

          {cart.items.map( (currentProduct, idx) => (
            <PurchaseList key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></PurchaseList>
          ))}
    </div>
  )
}

export default Purchase