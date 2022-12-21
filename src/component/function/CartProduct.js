import './CartProduct.css';

import { CartContext } from "./CartContext";
import { useContext } from "react";
import { getProductData } from "./productsStore";

function CartProduct(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);

    return (
        <div className='contenerCartProduct'>
            <div className='titleCartProduct'>
                <div className='imgCartProduct'></div>
                <div className='boxCartProduct'>
                    <h3 className='nameCartProduct'>{productData.title}</h3>
                    <button className='removeCartProduct' onClick={() => cart.deleteFromCart(id)}>Remove</button>
                </div>
            </div>
            
            <div className='itemCartProduct'>
                <button onClick={() => cart.removeOneFromCart(id)} className="btnCartProduct">-</button>
                <p className="quanlityCartProduct">{quantity}</p>
                <button  onClick={() => cart.addOneToCart(id)} className="btnCartProduct">+</button>
                <p className="priceCartProduct">{ (quantity * productData.price).toFixed(2) }-</p>
                <p className="priceCartProduct">{ (quantity * productData.price).toFixed(2) }-</p>
            </div>
        </div>
    )
}

export default CartProduct;