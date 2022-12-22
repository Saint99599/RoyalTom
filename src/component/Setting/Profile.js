import React from 'react'

const Profile = ({ username, name, email, phone, gender, birthday }) => {
  return (
    <div className="Detail">

      <div className="header">
        <p>Profile</p>
      </div>
      <hr></hr>
      <div className="block">
        <p>Username</p>
        <p>{username}</p>
      </div>
      <hr></hr>
      <div className="block">
        <p>Name</p>
        <p>{name}</p>
      </div>
      <hr></hr>
      <div className="block">
        <p>Password</p>
        <p>Change Password</p>
      </div>
      <hr></hr>
      <div className="block">
        <p>E-mail</p>
        <p>{email}</p>
      </div>
      <hr></hr>
      <div className="block">
        <p>Phone</p>
        <p>{phone}</p>
      </div>
      <hr></hr>
      <div className="block">
        <p>Gender</p>
        <div className="input">
          <input type="radio"></input>
          <label>Male</label>
          <input type="radio"></input>
          <label>Female</label>
          <input type="radio"></input>
          <label>Other</label>
        </div>
      </div>
      <hr></hr>
      <div className="block">
        <p>Birthday</p>
        <p>{birthday}</p>
      </div>
      <hr></hr>
      <button>Save</button>
      
    </div>
  )
}

Profile.defaultProps = {
  username: "None",
  name: "Noname",
  email: "dummy@example.com",
  phone: "123456",
  birthday: "32 December -1"
}

export default Profile
