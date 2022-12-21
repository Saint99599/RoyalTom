import './ProductList.css';
import { productsArray } from '../component/function/productsStore';
import ProductCard from '../component/ProductCard/ProductCard'
import Category from '../component/category/category';

// import KratomSoda from '../component/image/SoftDrinkTom.png'; 


function ProductList() {
  return (
    <div className='contenerProductList'>
      <Category/>
      <div className='boxProductList'>
        
        {productsArray.map((product, idx) => (
          <div className='PDProductList' key={idx}>
              <ProductCard product={product}/>
          </div>
        ))}

      </div>
    </div>
)
}

export default ProductList;
