import { BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css';

import Navbar from './component/Navbar/Navbar';
import Footer from './component/footer/footer';

import Home from './page/home';
import ProductList from './page/ProductList';
import Cart from './page/Cart';
// import Profile from "./page/Profiles";
import CartProvider from "./component/function/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route index element={<Home/>}/>
          </Routes>
          <Routes>
            <Route path="produclist" element={<ProductList/>}/>
          </Routes>
          <Routes>
            <Route path="cart" element={<Cart/>}/>
          </Routes>
          {/* <Routes>
            <Route path="profile" element={<Profile/>}/>
          </Routes> */}
        <Footer/>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
