import './ProductCard.css';

import { CartContext } from '../function/CartContext';
import { useContext } from 'react';

function ProductCard(props) {
    const product = props.product;
    const cart = useContext(CartContext);
    const getProductQuantity = cart.getProductQuantity(product.id)
    console.log(cart.items); 

    return(
        <button variant="primary" onClick={() => cart.addOneToCart(product.id)} className="cardProductCard">
            <div className="imgProductCard"></div>
            <div className="boxProductCard">
                <div className="nameProductCard">{product.title}</div>
                <div className="PSProductCard">
                    <p className="priceProductCard">{product.price}.-</p>
                    <p className="soldProductCard">{product.sold}</p>
                </div>
            </div>
        </button>
    )
}

export default ProductCard;