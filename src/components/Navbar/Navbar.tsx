import React, { useEffect, useState } from 'react';
import "./Navbar.scss";
import { Link } from 'react-router-dom';
// import { setCategories } from '../../store/categorySlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { fetchCategories } from '../../store/actions/fetchCategories';
import { getCartTotal } from '../../store/cartSlice';

function Navbar() {
const [navbarOpen, setNavbarOpen] = React.useState<boolean>(false);



const dispatch = useAppDispatch();
const categoryData = useAppSelector((state) => state.category.categoryData);
const totalItems = useAppSelector((state) => state.cart.totalItems);
console.log(categoryData)

useEffect(() => {
  dispatch(fetchCategories());
  dispatch(getCartTotal());
}, []);



  return (
    <nav className='navbar'>
      <div className="navbar-content">
        <div className="container">
          <div className="navbar-top flex flex-between">
            <Link to="/" className="navbsr-brand">
              <span className='text-legal-blue'>Shopping</span>
              <span className='text-red'>App</span>
            </Link>

            {/* <form className='navbar-search'>
              <input type="text" placeholder='Search..'/>
              <button type='submit' className='navbar-search-btn'>
                <i className='fas fa-search'></i>
              </button>
            </form> */}

            <div className="navbar-btns">
              <Link to="/cart" className='add-to-cart-btn flex'>
                <span className='btn-ico'>
                  <i className="fas fa-shopping-cart"></i>
                </span>
                <div className="btn-txt fw-5">cart <span className="cart-count-value">{totalItems}</span></div>
              </Link>
            </div>
          </div>
        </div>

        <div className="navbar-bottom bg-regal-blue">
          <div className="container-bottom flex flex-between">
            <ul className={`nav-links flex ${navbarOpen ? 'show-nav-links' : ""}`}>
              <button className="navbar-hide-btn text-white" onClick={() => setNavbarOpen(false)}>
                <i className="fas fa-times"></i>
              </button>
          
              {
                categoryData.map(c => (
                  <li key={c.id}> 
                    <Link to={`/category/${c.id}`} className='navbar-show-btn text-red' onClick={() =>setNavbarOpen(false)}>{c.name}</Link>

                  </li>
                ))
              }
            </ul>

            <button type='button' className="navbar-show-btn text-red" onClick={() => setNavbarOpen(true)}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar