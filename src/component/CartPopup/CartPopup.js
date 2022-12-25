import React from 'react'
import {Link} from 'react-router-dom'
import './popup.css'

const CartPopup = (props) => {
  return (props.trigger) ? (
     <div className="popup">
          <div className="popup-inner">
               <img src={require("../Images/correct.png")}></img>  
               <p>Order Success</p>
               <Link className="correct" to = "/home">
                    <p>return to home page</p>
               </Link>
          </div>
     </div>
  ) : "";
}

export default CartPopup
