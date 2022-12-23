import React from 'react'
import PurchaseList from './PurchaseList'

const purchase = [
  {
    id:"0096234ASSDKKGHH",
    name:"Kratom Cigarettes",
    quantity: 2,
    price: 999,
    status: "Pending Order",
    img:"weed"
  },
  {
    id:"0096234ASSDKKGHH",
    name:"Kratom Cookie",
    quantity: 5,
    price: 1050,
    status: "Order Complete",
    img:"cookie"
  }
]

const Purchase = () => {
  return (
    <div className="Detail">
          <div className="header">
            <p>Purchase</p>
          </div>
          <hr></hr>
          {purchase.map((purchaseList) => (
            <PurchaseList purchase={purchaseList}/>
          ))}
    </div>
  )
}

export default Purchase