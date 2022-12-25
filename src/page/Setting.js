import './Setting.css';
import React, { useState, useEffect } from "react"
import Topic from "../component/Setting/Topic"
import Profile from "../component/Setting/Profile"
import Address from "../component/Setting/Address"
import Payment from "../component/Setting/Payment"
import Privacy from "../component/Setting/Privacy"
import Purchase from "../component/Setting/Purchase"
import Navbar from '../component/Navbar/Navbar'

import styled from 'styled-components'

function Setting() {
  const [active, setActive] = useState("Profile");


  return (
    <>
      <Navbar />
      <SettingCSS>
        <div className="container">
          <Topic setState={setActive} />
          {active === "Profile" && <Profile />}
          {active === "Address" && <Address />}
          {active === "Payment" && <Payment />}
          {active === "Privacy" && <Privacy />}
          {active === "Purchase" && <Purchase />}
        </div>
      </SettingCSS>
    </>


  );
}

const SettingCSS = styled.section`
    background: lightgray;
    width: 100%;
    height:100%;
    font-family: "Poppins";
    font-size:24px;

    button{
      font-family: "poppins";
      cursor:pointer;
    }

    .container {
      margin: auto;
      height: auto;
      overflow: auto;
      padding: 30px;
      border-radius: 5px;
    }
  `


export default Setting;
