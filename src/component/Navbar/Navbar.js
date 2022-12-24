import React from "react";
import './Navbar.css';
import '../general.css';
import {Link} from 'react-router-dom';
import { useState, useContext } from "react";
import { CartContext } from "../function/CartContext"

import search from '../image/search.png'; 

function Navbar(){
    const cart = useContext(CartContext);
    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    return <header className = "contenerNavbar">
        <Link to = "/home" className="textNavbar Aladin">
            ROYAL TOM
        </Link>
        <ul className="boxNavbar">
            <li className="searchNavbar liNavbar">
                <input id="search" type="text" placeholder="Search.."/>
                <button className="btnSearchNavbar" onclick=""> 
                    <img className="searchTopSeller" src={search} alt="search" /> 
                </button>
            </li>
            <li className="contactNavbar Poppins liNavbar">
                Help Center
            </li>
            <li className="cartNavbar liNavbar">
                <Link to = "/cart" className="">
                    {productsCount} item 

                </Link>
            </li>

            <Link to = "/profile" className="profileNavbar">
                a
            </Link>
        </ul>
        
    </header>
}

export default Navbar