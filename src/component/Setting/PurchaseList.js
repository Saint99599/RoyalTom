import React from 'react'

const PurchaseList = ({purchase}) => {
  return (
    <div className="purchase">
        <div className="id">
            <p>{"Order ID: " + purchase.id}</p>
        </div>
        <div className="product">
            <div className="item">
                <img src={require('../Images/' + purchase.img + '.jpg')}></img>
                <div className="detail">
                    <p>{purchase.name}</p>
                    <p>{"x" + purchase.quantity}</p>
                </div>
            </div>

            <div className="price">
                <p>{purchase.price + " ฿"}</p>
            </div>

        </div>

        <div className="summary">

            <div className="status">
                <p>{"Status: " + purchase.status}</p>
            </div>

            <div className="total">
                <p>{"Total Price: " + purchase.price + " ฿"}</p>
            </div>
        </div>
        <hr></hr>
    </div>
  )
}

export default PurchaseList
