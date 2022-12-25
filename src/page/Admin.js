import './Admin.css';
import React, {useState,useEffect} from "react"
import Topic from "./components/AdminPage/Topic"
import Promotion from "./components/AdminPage/Promotion"

function Setting() {
  
  useEffect(() => {
    const token = localStorage.getItem('token')
    fetch('http://localhost:5000/users/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [])

  const [active, setActive] = useState("Profile");

 
  return (
    <>
    <Navbar/>
      <SettingCSS>
          <div className="container">
          <Topic state={setActive}/>
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
