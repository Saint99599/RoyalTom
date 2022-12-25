import './FAQs.css';
import faq from '../image/FAQs.png'; 

function FAQs() {
   return(
        <div className='contenerFAQsHelpCenter'>
            <div className='contenFAQsHelpCenter'>
                <div className='textFAQsHelpCenter'>
                    <div className='headFAQsHelpCenter'>FAQs</div>
                    <ul className='UlFAQsHelpCenter'>
                        <li className='liFAQsHelpCenter'>I forgot my password / Email, what should I do</li>
                        <li className='liFAQsHelpCenter'>I can't make a payment via Credit / Debit card</li>
                        <li className='liFAQsHelpCenter'>How do I update my contact information and address</li>
                        <li className='liFAQsHelpCenter'>I did not receive my item / missing item / empty box</li>
                        <li className='liFAQsHelpCenter'>What should I do if my order status is un successful delivery?</li>
                        <li className='liFAQsHelpCenter'>Contact Royal Tom Customer Care</li>
                        <li className='liFAQsHelpCenter'>I want to cancel my order</li>
                    </ul>
                </div>
                <img className="imgFAQsHelpCenter" src={faq} alt="FAQs" /> 
            </div>
        </div>
    )   
}

export default FAQs;