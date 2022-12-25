import React, { useState, useEffect } from 'react'

function Profile() {
  const [profileData, setProfile] = useState('');
  const [gender, setGender] = useState("Male");

  const token = localStorage.getItem('token')
  useEffect(() => {
    fetch('http://localhost:5000/users/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.sendData.birthday = "1 January 2542"
        setProfile(data.sendData);
        console.log(data.sendData)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });

  function onChangeValue(event) {
    setGender(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div className="Detail">

      <div className="header">
        <p>Profile</p>
      </div>
      <hr></hr>
      <div className="block">
        <p>Username</p>
        <p>{profileData.username}</p>
      </div>
      <hr></hr>
      <div className="block">
        <p>Name</p>
        <p>{profileData.firstName} {profileData.lastName}</p>
      </div>
      <hr></hr>
      <div className="block">
        <p>Password</p>
        <p><a className='continueCart' href="#">Change Password</a></p>
      </div>
      <hr></hr>
      <div className="block">
        <p>E-mail</p>
        <p>{profileData.email}</p>
      </div>
      <hr></hr>
      <div className="block">
        <p>Phone</p>
        <p>{profileData.phoneNum}</p>
      </div>
      <hr></hr>
      <div className="block">
        <p>Gender</p>
        <div className="input" onChange={onChangeValue}>
          <input type="radio" value="Male" name="gender" checked={gender === "Male"}></input>
          <label>Male</label>
          <input type="radio" value="Female" name="gender" checked={gender === "Female"}></input>
          <label>Female</label>
          <input type="radio" value="Other" name="gender" checked={gender === "Other"}></input>
          <label>Other</label>
        </div>
      </div>
      <hr></hr>
      <div className="block">
        <p>Birthday</p>
        <p>{profileData.birthday}</p>
      </div>
      <hr></hr>
      <button>Save</button>

    </div>
  )
}


export default Profile
