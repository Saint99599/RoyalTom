import './Cart.css';
import '../component/ProductCard/ProductCard.css';

import {Link} from 'react-router-dom';
import { useState, useContext } from "react";
import { CartContext } from "../component/function/CartContext";
import CartProduct from "../component/function/CartProduct";
import CartPopup from "../component/CartPopup/CartPopup";

import Navbar from '../component/Navbar/Navbar';

function Cart() {
      const cart = useContext(CartContext);
      const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
      const [popup, setpopup] = useState(false)

   return(
  <>
  <Navbar/>
   <div className='contenerCart'>
      <CartPopup trigger={popup} setTriggers={setpopup}>

      </CartPopup>
         <Link to = "/produclist" className='continueCart'>
            { '< ' + 'Continue Shopping'}
         </Link>
         <div className='centerCart'>
            <div className='boxCart'>
               <>    
                  <div className='productCart'>
                     <div className='HeadCart'>
                           <div className='topCart textblack'>
                              <p>Shopping Cart</p>
                           </div>
                           <div className='topCart textblack'>
                           {productsCount} ITEMs
                           </div>
                        </div>

                     <hr className='lineCart'/>
                     <div className='HeadCart'>
                        <div className='titleCart'>
                           <p>Product Details</p>
                        </div>
                        <div className='itemCart'>
                           <p>Quanlity</p>
                           <p>Price</p>
                           <p>Total</p>
                        </div>
                     </div>
                     {cart.items.map( (currentProduct, idx) => (
                        <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                     ))}
                  </div>

                  <div className='summaryCart'>
                     <h2>Order Summary</h2>
                     <div className='directionCart'>
                        <h5>Item ({productsCount})</h5>
                        <h5>{cart.getTotalCost().toFixed(2)}</h5>
                     </div>
                     <div className='directionCart'>
                        <h5>Shipping</h5>
                        <h5>Free</h5>
                     </div>
                     <div className='directionCart'>
                        <h5>Promo (12.12)</h5>
                        <h5>-12</h5>
                     </div>

                     <div className='directionCart'>
                        <select name="cars" id="cars">
                           <option value="5-7 day" className='xcz'>
                              <div className='list'>
                                 <p>5 - 7 DAYS</p>
                                 <p>FREE SHIPPING</p>
                              </div>
                           </option>
                           <option value="1-3 day" className='directionCart'>
                              <div className='list'>
                                 <p>1 - 3 DAYS</p>
                                 <p>60.-</p>
                              </div>
                           </option>
                        </select>
                     </div>
                     
                     <div className='promoCode'>
                        <input type="text" id="promo" name="id" placeholder="PROMO CODE"></input>
                        <button>ADD</button>
                     </div>
                    
                     
                     <hr className='lineCart'/>
                     <br></br>

                     
                     <div className="total">
                        <p>Total:</p>
                        <p>{cart.getTotalCost().toFixed(2) + ".-"}</p>
                     </div>

                     <div className='directionCart'>
                        <select name="cars" id="cars">
                           <option value="master" className='xcz'>
                              <div className='list'>
                                 <p>**** **** **** 5555</p>
                              </div>
                           </option>
                           <option value="bank" className='directionCart'>
                              <div className='list'>
                                 <p>KBank *1277</p>
                              </div>
                           </option>
                        </select>
                     </div>

                     <div className='location'>
                        <p>The CupBoard under ...</p>
                        <p>Change</p>
                     </div>

                     <button className="btnCart" onClick={() => setpopup(true)}>
                        CHECK OUT
                     </button>

                     
                  </div>
               </>
            </div>
         </div>
      </div>
  </>
  )
  }
  
export default Cart;