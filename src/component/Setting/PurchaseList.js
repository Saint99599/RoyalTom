import React from 'react'
import ReviewPopup from './Popup/ReviewPopup'
import {useState} from "react"

import purchase from './Purchase';

import { getProductData } from "../function/productsStore";

const PurchaseList = (props) => {
    const [popup, setpopup] = useState(false)
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);

  return (
    <div className="purchase">
        <div className="id">
            <p>{"Order ID: " + productData.id}</p>
        </div>
        <div className="product">
            <div className="item">
                <img className='imgPurchase' src={require("../image/" + productData.img + ".png")}></img>
                <div className="detail">
                    <p>{productData.title}</p>
                    <p>{"x" + quantity}</p>
                </div>
            </div>

            <div className="price">
                <p>{productData.price + " ฿"}</p>
            </div>

        </div>

        <div className="summary">

            <div className="status">
                <p>{"Status: " + productData.status}</p>
            </div>

            <div className="total">
                <p>{"Total Price: " + productData.price + " ฿"}</p>
            </div>
        </div>

        {/* <img className="" src={require("../image/" + productData.img + ".png")}/>
        <p className="">{quantity}</p>
        <p className="">{(quantity * productData.price).toFixed(2)}-</p> */}
        
        {
            productData.status == "Order Complete" &&
            <div className="review">
                <button className='white'>
                    Buy Again
                </button>
                <button className='white'>
                    Contact Seller
                </button>
                <button className='green' onClick={() => setpopup(true)}>
                    Rating
                </button>
            </div>
        }
        <hr></hr>
        <ReviewPopup trigger={popup} setTriggers={setpopup} product={productData}></ReviewPopup>
    </div>
  )
}

export default PurchaseList
