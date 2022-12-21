import React from "react";
import './TopSeller.css';

import leaf from '../image/leaf.png'; 
import image1 from '../image/KratomMilk.png'; 
import image2 from '../image/KratomTea.png'; 
import image3 from '../image/KratomCoffee.png'; 
import image4 from '../image/Capsuccino.png'; 

import Product from './productTopSell/productTopSell';

function TopSeller(){
    return (
        <div className="contenerTopSeller">
            <div className="boxTopSeller">
                <div className="titleTopSeller">
                    TOP SELLER<img className="leafTopSeller" src={leaf} alt="leaf" />
                </div>
                <div className="productTopSeller">
                    <Product title="Kratom Milk" imgUrl={image1}/>
                    <Product title="Kratom Tea" imgUrl={image2}/>
                    <Product title="Kratom Coffee" imgUrl={image3}/>
                    <Product title="Capsuccino" imgUrl={image4}/>
                </div>
            </div>
        </div>
    )
}

export default TopSeller