import './ContactUs.css';
import styled from 'styled-components'
// import faq from '../image/FAQs.png'; 

function ContactUs() {
   return(
        <div className='contenerContactUsHelpCenter'>
            <div className='contenContactUsHelpCenter'>
            <ContactUsCSS>
                <h1 className="signupTitleContactUs">Contact us</h1>
                <div className="smallContainerContactUs">
                    <div className="smallInputBox">
                        <label className="subjectText">Name</label>
                        <label className="redStar">*</label>
                        <input className="inputBox" type="text"/>
                    </div>
                    <div className="smallInputBox">
                        <label className="subjectText">Last Name</label><label className="redStar">*</label>
                        <input className="inputBox" type="text"/>
                    </div>
                </div>
                <div className="smallContainerContactUs">
                    <div className="smallInputBox">
                        <label className="subjectText">Email</label>
                        <label className="redStar">*</label>
                        <input className="inputBox" type="text"/>
                    </div>
                    <div className="smallInputBox">
                        <label className="subjectText">Phone Mobile</label><label className="redStar">*</label>
                        <input className="inputBox" type="text"/>
                    </div>
                </div>
                <div className="LowerBoxContactUs">
                    <div className="gridItemBox">
                        <label className="subjectText">Message</label><label className="redStar">*</label>
                        <textarea className="inputBox" rows="8" type="text"/>
                    </div>
                </div>
                <div className="signupOuterBox">
                    <button type="submit" className="signupButton">Send Message</button>
                </div>
            </ContactUsCSS>
            </div>
        </div>
    )   
}

const ContactUsCSS = styled.section`
    .itemSide{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 50px 0px;
        background-color: rgb(92, 141, 103);
    }

    ul {
        display: flex;
        align-items: center;
        list-style-type: none;
    }

    li {
        margin: 0px 10px;
        display: flex;
        align-items: center;
        list-style-type: none;
    }

    *{
        box-sizing: border-box;
    }
    
    textarea[type=text], input[type=text], input[type=password] {
      width: 100%;
      padding: 15px;
      margin: 5px 0 22px 0;
      display: inline-block;
      border: none;
      background: #f1f1f1;
    }
    
    textarea[type=text]:focus, input[type=text]:focus, input[type=password]:focus {
      background-color: #ddd;
      outline: none;
    }
    
    button {
      background-color: #237e37;
      color: white;
      padding: 14px 20px;
      margin: 8px 0;
      border: none;
      cursor: pointer;
      width: 100%;
      opacity: 0.9;
      text-decoration: none;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: bold;
      width:580px;
    }
    
    button:hover {
      opacity:1.2;
    }

    .signupBox{
        flex-direction: column;
        justify-content: center;
        background:rgb(255, 255, 255);
        border-radius: 25px;
        margin-top: 50px;
        margin-bottom: 30px;
        margin-left: 200px;
        width: 657px;
        border-style: solid;
    
        height: 740px;
        border: 1px solid gray;
    }

    .signupTitleContactUs{
        text-decoration: none;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        color: rgba(0, 0, 0, 0.95);
        margin-bottom: 40px;
    }

    .smallContainerContactUs{
        display:flex;
        align-items: center;
    }

    .LowerBoxContactUs{
        padding:8px;
    }
`

export default ContactUs;