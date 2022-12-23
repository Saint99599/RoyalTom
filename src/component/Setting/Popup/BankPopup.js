import React from 'react'
import './Popup.css'

const BankPopup = ({trigger, setTriggers}) => {
     return (trigger) ? (
          <div className="popup">
              <div className="popup-inner">
                <p className="popup-title">Bank Account</p>
                <div className="popup-detail">
                  <p>Number</p>
                    <input type="text" id="bankNum" name="bankNum" placeholder="Number"></input>
                </div>
                <div className="popup-detail">
                  <p>IC Number</p>
                  <input type="text" id="ICNum" name="ICNum" placeholder="IC Number"></input>
                </div>
                <div className="button">
                  <button className="cancel-btn" onClick={() => setTriggers(false)}>Cancel</button>
                  <button className="save-btn" onClick={() => setTriggers(false)}>Submit</button>
                </div>
              </div>
          </div>
        ) : "";
      }

export default BankPopup
