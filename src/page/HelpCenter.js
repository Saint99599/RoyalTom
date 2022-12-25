import './HelpCenter.css';
import SearchHelpCenter from '../component/HelpCenter/SearchHelpCenter';
import TopicHelpCenter from '../component/HelpCenter/topicHelpCenter';
import FAQs from '../component/HelpCenter/FAQs';
import ContactUs from '../component/HelpCenter/ContactUs';

import Navbar from '../component/Navbar/Navbar';
import Footer from '../component/footer/footer';

function HelpCenter() {
   return(
        <div>
            <Navbar/>
            <SearchHelpCenter/>
            <TopicHelpCenter/>
            <FAQs/>
            <ContactUs/>
            <Footer/>
        </div>
    )   
}

export default HelpCenter;