import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { addToCart } from '../../store/cartSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { setIsModalVisible } from '../../store/modalSlice';
import { RootObject } from '../../Types';
import { formatPrice } from '../../utils/helper';
import "./singelProduct.scss"

function SingelProduct() {
  const dispatch = useAppDispatch();
  const [qty, setQty] = useState(1);
  const navigate =  useNavigate();
  const dataProduct = useAppSelector((state) => state.modal.data);

  console.log(dataProduct);

  const increaseQty = () => {
    setQty((prevQty) => {
      let newQty = prevQty + 1;
      return newQty; 
    })
  };


  const decreaseQty= () => {
    setQty((prevQty) => {
      let newQty = prevQty - 1;
      if(prevQty < 1) {
        newQty = 1;
      }
      return newQty;
    })
  }

  const addToCartHandler = (dataProduct: RootObject) => {
    let totalPrice = qty * dataProduct.price;
    const tempProduct = {
      ...dataProduct, quantity: qty,
      totalPrice
    }
    dispatch(addToCart(tempProduct));
    dispatch(setIsModalVisible(false));
    navigate('/cart');
    console.log(tempProduct)
  };


  return (
    <div className="overlay-bg">
      <div className="product-details-modal bg-white">
        <button className="modal-close-btn flex flex-center fs-14" onClick={() => dispatch(setIsModalVisible(false))}>
          <i className="fas fa-times"></i>
        </button>
        {/* {dataProduct.map(product => ( */}
        <div className="details-content grid">
          <div className="details-left">
            <div className="details-img">
              <img src={dataProduct.images[0]} alt="" />
            </div>
          </div>
          <div className="details-right">
            <div className="details-info">
              <h3 className="title text-regal-blue fs-22 fw-5">
                {dataProduct.title}
              </h3>
              <p className="descrition text-pine-green">{dataProduct.description}</p>
              <div className="price fw-7 fs-24">Price: {formatPrice(dataProduct.price)}</div>
              <div className="qty flex">
                <span className="text-light-blue qty-text">
                  Qty:
                </span>
                <div className="qty-change flex">
                  <button className="qty-dec fs-14"><i className="fas fa-minus" onClick={(e:any) => decreaseQty()}></i></button>
                  <span className="qty-value flex flex-center">{qty}</span>
                  <button className="qty-inc fs-14 tet-light-blue" onClick={(e:any) => increaseQty()}>
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
              </div>
              <button className="btn-primary add-to-cart-btn" onClick={() => addToCartHandler(dataProduct)}>
                <span className="btn-icon">
                  <i className="fas fa-cart-shopping"></i>
                </span>
                <span className="btn-text">Add To Cart</span>
              </button>
            </div>
          </div>
        </div>
        {/* ))} */}

      </div>
    </div>
  )
}

export default SingelProduct