import React from 'react'

function AddressList({address}) {
  return (
    <div className="addressList">
     <div className="name">
     <h3>{address.name}</h3>
     <h3>{address.tel}</h3>
     </div>
      <p>{address.address}</p>
      <div className="button">
          <button className="edit">Edit</button>
          <button className="default">Default</button>
      </div>
    </div>
  )
}

export default AddressList
