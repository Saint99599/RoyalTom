import React from 'react'
import Card from './Card'
import Bank from './Bank'
import {useState} from "react"
import BankPopup from './Popup/BankPopup'
import CardPopup from './Popup/CardPopup'

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
  const [cardP, setCardP] = useState(false)
  const [bankP, setBankP] = useState(false)

  return (
    <div className="Detail">
      <div className="header">
        <p>Bank & Cards</p>
      </div>
      <hr></hr>
      <div className="header">
        <p>My Credit/Debit Cards</p>
        <button onClick={() => setCardP(true)}>+ Add New Card</button>
      </div>
      {card.map((card) => (
        <Card card={card}/>
        ))}
      <hr></hr>
      <div className="header">
          <p>My bank Account</p>
          <button onClick={() => setBankP(true)}>+ Add new bank Account</button>
      </div>
      {bank.map((bank) => (
        <Bank bank={bank}/>
      ))}
      <CardPopup trigger={cardP} setTriggers={setCardP}>

      </CardPopup>

      <BankPopup trigger={bankP} setTriggers={setBankP}>

      </BankPopup>
    </div>
  )
}

export default Payment