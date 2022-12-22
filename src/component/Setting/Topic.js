import avatar from "../Images/avatar.png"
import React from 'react'

const Topic = ({ name, state }) => {
  return (
     <div className="selection">
          <div className="list">
               <div className="account">
                    <img src={avatar}></img>
                    <div className="name">
                         <h2>{name}</h2>
                         <p className="editprofile">edit Profile</p>
                    </div>
               </div>
               <div className="myAccount">
                    <button onClick={() => state("Profile")}>My Account</button>
                    {/* Icon */}
               </div>
               <div>
                    <button onClick={() => state("Address")}>Address</button>
               </div>
               <div>
                    <button onClick={() => state("Payment")}>Bank & Cards</button>
               </div>
               <div>
                    <button onClick={() => state("Privacy")}>Privacy and Safty</button>
               </div>
               <div className="purchase">
                    <button onClick={() => state("Purchase")}>My Purchase</button>
                    {/* Icon */}
               </div>
          </div>
     </div>
  )
}


Topic.defaultProps = {
     name: "None"
}
export default Topic
