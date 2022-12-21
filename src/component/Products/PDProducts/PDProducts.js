import React from "react";
import './PDProducts.css';

import priceImg from './price.png'; 

function PDProducts(props){
    const {title,imgUrl,price} = props;
    return (
        <div className="contenerPDProducts">
            <img className="imgPDProducts" src={imgUrl}/>
            <p className="textPDProducts">{title}</p>
            <img className="priceImgPDProducts" src={priceImg} alt="price" /> 
            <p className="pricePDProducts">{price}</p>
        </div>
    )
}

export default PDProducts