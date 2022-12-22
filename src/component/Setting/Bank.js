import React from 'react'

const bank = ({bank}) => {
  return (
    <div className="paymentDetail">
      <div className="list">
          <div className="detail">
            <img src={require('../Images/' + bank.img + '.png')}></img>
            <div className="text">
              <p>{bank.bank}</p>
              <p>{"**** **** ****".concat((bank.num).substring(14))}</p>
              <p>{bank.name}</p>
            </div>
          </div>
          <div className="button">
            <button>Default</button>
          </div>
      </div>
    </div>
  )
}

export default bank
