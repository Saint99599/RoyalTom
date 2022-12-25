import { BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css';

import Navbar from './component/Navbar/Navbar';
import Footer from './component/footer/footer';

import Home from './page/home';
import ProductList from './page/ProductList';
import Cart from './page/Cart';
import Setting from "./page/Setting";
import Register from "./page/Register";
import Login from "./page/Login";
import HelpCenter from "./page/HelpCenter"
import CartProvider from "./component/function/CartContext";
import OrderStatus from "./component/OrderStatus/OrderStatus"
import Promotion from "./component/AdminPage/Promotion";

// import Setting from "./page/Setting";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        {/* <Navbar> */}
          <Routes>
            <Route index element={<Login/>}/>
          </Routes>
          <Routes>
            <Route path="Home" element={<Home/>}/>
          </Routes>
          <Routes>
            <Route path="produclist" element={<ProductList/>}/>
          </Routes>
          <Routes>
            <Route path="cart" element={<Cart/>}/>
          </Routes>
          <Routes>
            <Route path="profile" element={<Setting/>}/>
          </Routes>
          <Routes>
            <Route path="register" element={<Register/>}/>
          </Routes>
          <Routes>
            <Route path="login" element={<Login/>}/>
          </Routes>
          <Routes>
            <Route path="helpcenter" element={<HelpCenter/>}/>
          </Routes>
          <Routes>
            <Route path="orderstatus" element={<OrderStatus/>}/>
          </Routes>
          <Routes>
            <Route path="promotion" element={<Promotion/>}/>
          </Routes>
          {/* <Routes>
            <Route path="orderstatus" element={<OrderStatus/>}/>
          </Routes> */}
        {/* <Footer/> */}
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
