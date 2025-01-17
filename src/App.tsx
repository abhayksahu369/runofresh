import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DealOfTheDay from './components/DealOfTheDay';
import CategorySection from './components/CategorySection';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import Wishlist from './pages/Wishlist';
import Orders from './pages/Orders';
import Address from './pages/Address';
import Runocoin from './pages/Runocoin';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart';
import Payment from './components/Payment';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <DealOfTheDay />
                <CategorySection />
              </>
            } />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Wishlist" element={<Wishlist />} />
            <Route path="/Orders" element={<Orders />} />
            <Route path="/Manage Address" element={<Address />} />
            <Route path="/runocoin" element={<Runocoin />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;