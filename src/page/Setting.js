import './Setting.css';
import React, {useState} from "react"
import Topic from "../component/Setting/Topic"
import Profile from "../component/Setting/Profile"
import Address from "../component/Setting/Address"
import Payment from "../component/Setting/Payment"
import Privacy from "../component/Setting/Privacy"
import Purchase from "../component/Setting/Purchase"

function Setting() {
  
  const [active, setActive] = useState("Profile");

 
  return (
    <div className="container">
      {/* <h1> Testing </h1>
      <h2>hel {x ? "Yes" : "No" }</h2> */}
      
      <Topic state={setActive}/>
      {active === "Profile" && <Profile />}
      {active === "Address" && <Address />}
      {active === "Payment" && <Payment />}
      {active === "Privacy" && <Privacy />}
      {active === "Purchase" && <Purchase />}
      
      {/* if(activePage == "Profile"){
        <Profile />      
      }
      else if(activePage == "Address"){
        <Address />
      } */}

    </div>
  );
}


export default Setting;
