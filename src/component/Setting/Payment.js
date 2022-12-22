import React from 'react'
import Card from './Card'
import Bank from './Bank'

const card = [
  {
    type: 'Master Card',
    num: "1234 5678 9101 5555",
    img:"Mastercard"
  },
  {
    type: 'Visa',
    num: "1234 5678 9101 5555",
    img:"Visa"
  }
]
const bank = [
  {
    bank:"KBank",
    num: "1234 5678 9101 5555",
    name: "Noname",
    img:"kbank"
  }
]

const Payment = () => {
  return (
    <div className="Detail">
      <div className="header">
        <p>Bank & Cards</p>
      </div>
      <hr></hr>
      <div className="header">
          <p>My bank Account</p>
          <button>+ Add new bank Account</button>
      </div>
      {card.map((card) => (
        <Card card={card}/>
        ))}
      <hr></hr>
      <div className="header">
        <p>My Credit/Debit Cards</p>
        <button>+ Add New Card</button>
      </div>
      {bank.map((bank) => (
        <Bank bank={bank}/>
      ))}
    </div>
  )
}

export default Payment