import React from "react";
import './productTopSell.css';

function productTopSell({title, imgUrl}){
    // const {title,imgUrl} = props;
    return (
        <div className="contenerPDTopSell">
           <img className="imgPDTopSell" src={imgUrl}/>
            <div className="textPDTopSell">{title}</div>
        </div>
    )
}

export default productTopSell