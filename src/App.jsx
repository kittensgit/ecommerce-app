import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import About from './components/About';
import Contact from './components/Contact';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/ecommerce-app" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    );
}

export default App;
