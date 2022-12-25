import React from "react";
import './footer.css';

import LogoFacebook from "../image/facebook.png"
import LogoMail from "../image/mail.png"
import LogoIG from "../image/ig.png"
import LogoDiscord from "../image/d.png"

function footer(){
    return (
        <div className="contenerFooter">
            <div className="boxFooter">
                <div className="ContactLFooter">
                    <ul className="UlLfooter">
                        <li className="LiLfooter">
                            Privacy
                        </li>
                        <li className="LiLfooter LiMargin">
                            Terms
                        </li>
                        <li className="LiLfooter LiMargin">
                            Accessibbility
                        </li>
                        <li className="LiLfooter LiMargin">
                            Report Bug
                        </li>
                        <li className="LiLfooter">
                            F&Q
                        </li>
                    </ul>
                </div>
                <div className="ContactRFooter">
                    <p className="titleFooter">Contact us</p>
                    <ul className="UlRfooter">
                        <li className="LiRfooter">
                            <img className="LogoFooter" src={LogoFacebook} alt="leaf"/>
                            <p>Royal Tom Official</p>
                        </li>
                        <li className="LiRfooter">
                            <img className="LogoFooter" src={LogoMail} alt="leaf"/>
                            <p>CEO_Kue@korkuefood.com</p>
                        </li>
                        <li className="LiRfooter">
                            <img className="LogoFooter" src={LogoDiscord} alt="leaf"/>
                            <p>discord.gg/RoyalTom</p>
                        </li>
                        <li className="LiRfooter">
                            <img className="LogoFooter" src={LogoIG} alt="leaf"/>
                            <p>instagram.com/Royal Tom_Official</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default footer