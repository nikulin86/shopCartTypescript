import React from 'react';
import logo from './logo.svg';
import './App.scss';
// pages
import { Home, Category, Cart } from "./pages/index";
// components
import Navbar from "./components/Navbar/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Slider from './components/Slider/Slider';
import HomePage from './pages/HomePage/HomePage';
import CartPage from './pages/CartPage/CartPage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <HomePage/> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category/:id' element={<Category />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
