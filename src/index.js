import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// product provide by
import ProductProvider from './contexts/ProductContext';
// sidebar provide by
import SidebarProvider from './contexts/SidebarContext';
// cart provide by
import CartProvider from './contexts/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
);
