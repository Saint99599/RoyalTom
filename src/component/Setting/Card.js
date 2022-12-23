import React from 'react'

const card = ({card}) => {
     console.log('../Images/' + String(card.img) + '.png')
  return (
     <div className="paymentDetail">
        <div className="detail">
        <img src={require('../Images/' + card.img + '.png')}></img>
        {/* <img src={require('../Images/Mastercard.png')}></img> */}
          <div className="text">
            <p>{card.type}</p>
            <p>{"**** **** ****".concat((card.num).substring(14))}</p>
          </div>
        </div>
        <div className="button">
          <button>Default</button>
        </div>

   </div>
  )
}

export default card