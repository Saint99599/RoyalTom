import React from 'react'
import './Popup.css'

const CardPopup = ({trigger, setTriggers}) => {
     return (trigger) ? (
          <div className="popup">
              <div className="popup-inner">
                <p className="popup-title">Add Card</p>
                <div className="popup-block">
                  <p>Your card details are protected</p>
                  <div className="popup-des">
                    <p>We partner with ROYAL TOM to ensure that your card details are kept safe and secure. ROYAL TOM will not have access to your card info.</p>
                  </div>
                </div>
                <div className="popup-detail">
                  <p>Card Details</p>
                  <input type="text" id="card" name="card" placeholder="Card Number"></input>
                </div>
                <div className="popup-detail">
                  <div className="popup-card">
                    <input type="month" id="expiry" name="expiry" placeholder="Expiry Date(MM/YY)"></input>
                    <input type="text" id="cvv" name="cvv" placeholder="CVV"></input>
                  </div>
                </div>
                <div className="popup-detail">
                  <input type="text" id="name" name="name" placeholder="Name on Card"></input>
                </div>
                <div className="button">
                  <button className="cancel-btn" onClick={() => setTriggers(false)}>Cancel</button>
                  <button className="save-btn" onClick={() => setTriggers(false)}>Submit</button>
                </div>
              </div>
          </div>
        ) : "";
      }

export default CardPopup
