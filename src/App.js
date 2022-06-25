import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import {Routes, Route} from 'react-router-dom';
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';
import Checkout from './component/Checkout';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<Product/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
      
    </>
  );
}

export default App;
