import React from 'react'
import './Popup.css'

const AddressPopup = (props) => {
  return (props.trigger) ? (
    <div className="popup">
        <div className="popup-inner">
          <p className="popup-title">New Address</p>
          <div className="popup-detail">
            <p>Name</p>
            <div className="popup-name">
              <input type="text" id="fname" name="fname" placeholder="First Name"></input>
              <input type="text" id="lname" name="lname" placeholder="Last Name"></input>
            </div>
          </div>
          <div className="popup-detail">
            <p>Phone Number</p>
            <input type="text" id="phone" name="phone" placeholder="Phone Number"></input>
          </div>
          <div className="popup-detail">
            <p>Address</p>
            <input type="text" id="Street" name="Street" placeholder="Address"></input>
          </div>
          <div className="popup-detail">
            <p>City</p>
            <input type="text" id="city" name="city" placeholder="City"></input>
          </div>
          <div className="popup-detail">
            <p>State</p>
            <input type="text" id="state" name="state" placeholder="State"></input>
          </div>
          <div className="popup-detail">
            <p>Zip Code</p>
            <input type="text" id="zip" name="zip" placeholder="ZIP code"></input>
          </div>
          <div className="button">
            <button className="cancel-btn" onClick={() => props.setTriggers(false)}>
              Cancel
            </button>
            <button className="save-btn" onClick={() => props.setTriggers(false)}>
              Submit
            </button>
          </div>
          {props.children}
        </div>
    </div>
  ) : "";
}

export default AddressPopup
