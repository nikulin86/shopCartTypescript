import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { clearCart, getCartTotal, removeFromCart, toggleCartQty } from '../../store/cartSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks'
import { NewRootObject, RootObject } from '../../Types';
import { formatPrice } from '../../utils/helper';
import "./CartPage.scss"

function CartPage() {

  const dispatch = useAppDispatch();
  const { data, totalItems, totalAmout, deliveryCharge } = useAppSelector(state => state.cart);


  console.log(data)
  useEffect(() => {
    dispatch(getCartTotal())
  }, [useAppSelector(state => state.cart)]);


  const emptyCartMsg = <h4 className='text-red fw-6'>No items found!</h4>

  return (
    <div className='cart-page'>
      <div className="container">
        <div className="breadcrumb">
          <ul className="beardcrumb-items flex">
            <li className="breadcrumb-item">
              <Link to="/">
                <i className="fas fa-home"></i>
                <span className="breadcrumb-separator">
                  <i className="fas fa-chervron-right"></i>
                </span>
              </Link>
            </li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
      <div className="bg-ghost-white py-5">
        <div className="container">
          <div className="section-title bg-ghost-white">
            <h3 className="text-uppercase fw-7 text-regal-blue ls-1">
              My Cart
            </h3>
            {
              data.lenght === 0 ? emptyCartMsg : (
                <div className="cart-content grid">
                  <div className="cart-left">
                    <div className="cart-items grid">
                      {
                        data.map((cartProduct: NewRootObject) => (
                          <div className="cartitem grid">
                            <div className="cart-item-im flex flex-column bg-white">
                              <img src={cartProduct.images[0]} alt={cartProduct.title} />
                              <button className="btn-square rmv-from-cart-btn" onClick={() => dispatch(removeFromCart(cartProduct.id))}>
                                <span className="btn-square-icon">
                                  <i className="fas fa-trash"></i>
                                </span>
                              </button>
                            </div>
                            <div className="cart-item-info">
                              <h6 className="fs-16 fw-5 text-light-blue">
                                {cartProduct.title}
                              </h6>
                              <div className="qty flex">
                                <span className="text-light-blue qty-text">
                                  Qty:
                                </span>
                                <div className="qty-change flex">
                                  <button className="qty-dec fs-14" onClick={() => dispatch(toggleCartQty({id: cartProduct.id,type: "DEC"}))}><i className="fas fa-minus" ></i></button>
                                  <span className="qty-value flex flex-center">{cartProduct.quantity}</span>
                                  <button className="qty-inc fs-14 tet-light-blue" onClick={() => dispatch(toggleCartQty({id: cartProduct.id,type: "INC"}))}>
                                    <i className="fas fa-plus"></i>
                                  </button>
                                </div>
                              </div>

                              <div className="flex flex-between">
                                <div className="text-pine-green fw-4 fs-15 price">
                                  Price: {formatPrice(cartProduct.price)}
                                </div>
                                <div className="sub-total fw-6 fs-18 text-regal-blue">
                                  <span>
                                    Sub total:
                                  </span>
                                  <span>{formatPrice(cartProduct.totalPrice)}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                    <button className="btn-danger" onClick={() => dispatch(clearCart())}>
                      <span className="fs-16">Clear Cart</span>
                    </button>
                  </div>
                  <div className="cart-right bg-white">
                    <div className="cart-summary text-light-blue">
                      <div className="cart-summary-title">
                        <h6 className="fs-20 fw-5">
                          Order Summary
                        </h6>
                      </div>
                      <ul className="cart-summary-info">
                        <li className="flex flexx-between">
                          <span className="fw-4">
                            Selected {totalItems} item(s) Price
                          </span>
                          <span className="fw-7">
                            {formatPrice(totalAmout)}
                          </span>
                        </li>
                        <li className="flex fex-between">
                          <span className="fw-4">
                            Discount
                          </span>
                          <span className="fw-7">
                            <span className="fw-5 text-red">
                              -&nbsp;
                            </span>
                            <span>{formatPrice(0)}</span>
                          </span>
                        </li>
                        <li className="flex flex-between">
                          <span className="fw-4">Delivery Cost</span>
                          <span className="fw-7">
                            <span className="fw-5 text-gold">
                            +&nbsp;
                            </span>
                            <span>{formatPrice(deliveryCharge)}</span>
                          </span>
                        </li>
                      </ul>

                      <div className="cart-summary-total flex flex-between fs-18">
                        <span className="fw-6">Grand Total:</span>
                        <span className="fw-6">
                          {formatPrice(totalAmout + deliveryCharge)}
                        </span>
                      </div>
                      <div className="cart-summary-btn">
                        <button className="btn-secondary">
                          Proceed to Checkout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage