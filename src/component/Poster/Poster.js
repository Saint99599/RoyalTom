import React from "react";
import './Poster.css';
import {Link} from 'react-router-dom'

import arrow from '../image/arrow.png'; 

function Poster(){
    return (
        <div className="ImagePoster">
            <div className="textPoster">
                <p className="text1Poster">
                    We Know A Way
                </p>
                <p className="text2Poster">
                    To Make You Happy
                </p>
                <button className="btnPoster">
                    <Link to = "/produclist" className="btn">
                        See Our Product <img className="arrow" src={arrow} alt="arrow"/>
                    </Link></button>
            </div>
        </div>
    )
}

export default Poster