import React from 'react'
import AddressList from './AddressList';
import {useState} from "react"
import AddressPopup from './Popup/AddressPopup';
const tasks = [
  {
    name: 'Noname',
    tel: '082-345-6789',
    address:'The Cupboard under the Stairs, 4 Privet Drive, Little Whinging, Surrey',
    default:'default'
  },
  {
    name: 'John',
    tel: '081-234-5678',
    address:'The Cupboard under the Stairs, 4 Privet Drive, Little Whinging, Surrey',
    default:'set as default'
  },
  {
    name: 'Jane',
    tel: '000-000-0000',
    address:'dummmy',
    default:'set as default'
  },
  {
    name: 'Jane',
    tel: '000-000-0000',
    address:'dummmy',
    default:'set as default'
  },
  {
    name: 'Jane',
    tel: '000-000-0000',
    address:'dummmy',
    default:'set as default'
  }
]

const Address = ({ name, tel, address}) => {
  const [popup, setpopup] = useState(false)

  return (
    <div className="Detail">
          <AddressPopup trigger={popup} setTriggers={setpopup}>
            {/* <h3>My Popup</h3> */}
          </AddressPopup>
          <div className="header">
            <p>Address</p>
            <button className="address" onClick={() => setpopup(true)}>Add new address</button>
          </div>
          {tasks.map((task) => (
          <AddressList address={task}/>
          ))}

    </div>
  )
}

export default Address