import React from "react";
import './Products.css';

import {Link} from 'react-router-dom'

import arrow from '../image/arrow.png'; 
import KratomMilk from '../image/KratomMilk.png'; 
import Chcotom from '../image/Chocotom.png'; 
import SoftDrinkTom from '../image/SoftDrinkTom.png'; 
import NamTom from '../image/NamTom.png'; 

import Product from './PDProducts/PDProducts';

function Products(){
    return (
        <div className="contenerProducts">
            <div className="boxProducts">
                <div className="textProducts">Products</div>
                <div className="productProducts">
                    <Product title="Bai Kra-Tom" price="80.-" imgUrl={KratomMilk}/>
                    <Product title="Chocotom" price="349.-" imgUrl={Chcotom}/>
                    <Product title="Soft Drink Tom" price="399.-" imgUrl={SoftDrinkTom}/>
                    <Product title="Nam Tom" price="120.-" imgUrl={NamTom}/>
                </div>
                <button className="btnMore" >
                    <Link to = "/produclist" className="btn">
                        More  <img className="arrowMore" src={arrow} alt="arrow"/>
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Products