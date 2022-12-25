import Poster from '../component/Poster/Poster';
import TopSeller from '../component/TopSeller/TopSeller';
import Products from '../component/Products/Products';
import React, {useEffect} from 'react';

import Navbar from '../component/Navbar/Navbar';
import Footer from '../component/footer/footer';


function Home() {
useEffect(() => {
  const token = localStorage.getItem('token')
  fetch('http://localhost:5000/users/authen', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer '+ token
        },
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.status === 'ok'){
            }else{
                alert('Authen Failed')
                localStorage.removeItem('token')
                window.location = '/'
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
},[])

const handleLogout = (event) => {
  event.preventDefault()
  localStorage.removeItem('token')
  window.location = '/login'
}

  return ( 
  <div>
    <Navbar/>
    <Poster/>
    <button onClick={handleLogout}>Logout</button>
    <TopSeller/>
    <Products/>
    <Footer/>
  </div>
  );
}

export default Home;