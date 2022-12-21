import React from "react";
import './category.css';

function category(){
    return (
        <div className="contenerCategory">
            <hr/>
            <ul className="boxCategory">
                <li className="textCategory Textgreen">
                    Popular
                </li>
                <li className="textCategory Textgrey">
                    Meal & Course
                </li>
                <li className="textCategory Textgrey">
                    Dish Type
                </li>
                <li className="textCategory Textgrey">
                    Dieary Concerns
                </li>
                <li className="textCategory Textgrey">
                    Cuisine
                </li>
                <li className="textCategory Textgrey">
                    Holiday
                </li>
                <li className="textCategory Textgrey">
                    Technique
                </li>
            </ul>
            <hr/>
        </div>
    )
}

export default category