import './SearchHelpCenter.css';
import search from '../image/search.png'; 

function SearchHelpCenter() {
   return(
        <div className='contenerSearchHelpCenter'>
            <p className='textSearchHelpCenter'>Hello How can I help you?</p>
            <div className='boxSearchHelpCenter'>
                <input className="inputSearchHelpCenter" type="text" placeholder="Search"/>
                <button className="btnSearchHelpCenter" onclick=""> 
                    <img className="searchHelpCenter" src={search} alt="search" /> 
                </button>
            </div>
        </div>
    )   
}

export default SearchHelpCenter;