import React from "react";
import './Navbar.css';
import '../general.css';
import {Link} from 'react-router-dom';
import { useState, useContext } from "react";
import { CartContext } from "../function/CartContext"

import search from '../image/search.png'; 

function Navbar2(){

    return (
        <header className = "contenerNavbar">
            <Link to = "/" className="textNavbar Aladin">
                ROYAL TOM
            </Link>
            <ul className="boxNavbar">
                <Link to = "/helpcenter" className="contactNavbar Poppins liNavbar">
                    Help Center
                </Link>
            </ul>
        </header>
    )
    
}

export default Navbar2