import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import pages
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

// import components
import CartItem from './components/CartItem';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/CartItem';
import Product from './components/Product';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Sidebar />
      <Footer />
    </Router>
  )
};

export default App;
