import './topicHelpCenter.css';

import Products from '../image/Products.png'; 
import Payments from '../image/Payments.png'; 
import Orders from '../image/Orders.png'; 
import Shipping from '../image/Shipping.png'; 
import Other from '../image/Other.png'; 


function topicHelpCenter() {
   return(
        <div className='contenertopicHelpCenter'>
            <div className='contentopicHelpCenter'>
            <p className='texttopicHelpCenter'>TOPIC</p>
                <div className='boxtopicHelpCenter'>
                    <div className='cardtopicHelpCenter'>
                        <img className="ImagetopicHelpCenter" src={Products} alt="Products" /> 
                        <p className="ptopicHelpCenter">Products on Royal Tom</p>
                    </div>
                    <div className='cardtopicHelpCenter'>
                        <img className="ImagetopicHelpCenter" src={Payments} alt="Products" /> 
                        <p className="ptopicHelpCenter">Payments</p>
                    </div>
                    <div className='cardtopicHelpCenter'>
                        <img className="ImagetopicHelpCenter" src={Orders} alt="Products" /> 
                        <p className="ptopicHelpCenter">Orders & Promotions</p>
                    </div>
                    <div className='cardtopicHelpCenter'>
                        <img className="ImagetopicHelpCenter" src={Shipping} alt="Products" /> 
                        <p className="ptopicHelpCenter">Shipping & Delivery</p>
                    </div>
                    <div className='cardtopicHelpCenter'>
                        <img className="ImagetopicHelpCenter" src={Other} alt="Products" /> 
                        <p className="ptopicHelpCenter">Other Topics</p>
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default topicHelpCenter;