import React, { Component } from 'react'
import { Categories, RootObject } from '../../Types';
import { formatPrice } from '../../utils/helper';
import "./SingelCategory.scss";
import { setIsModalVisible, setModalData } from '../../store/modalSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';

interface SingelCategoryProps {
  productsByCategory: RootObject[];
}


function SingelCategory(props: SingelCategoryProps) {
  const dispatch = useAppDispatch();

  const isModalVisible = useAppSelector((state) => state.modal.isModalVisible);


  const viewModalHandler = (data: any) => {
    console.log(data)
    dispatch(setModalData(data));
    dispatch(setIsModalVisible(true));
  }
  return (

    <section className="cat-single py-5 bg-ghost-white">
      <div className="container">
        <div className="cat-single-content">
          <div className="section-title">
            <h3 className="text-uppercase fw-7 text-regal-blue ls-1">
              {props && props.productsByCategory[0]?.category.name}
            </h3>
          </div>
          <div className="product-items grid">
            {
              props.productsByCategory.map(product => (
                <div className="product-item bg-white" onClick={() => viewModalHandler(product)}>
                  <div className="product-item-img">
                    <img src={product.images[0]} alt="" />
                    <div className="product-item-cat taxt-white fs-13 text-uppercase bg-gold fw-6">
                      {product.category.name}
                    </div>
                  </div>
                  <div className="product-item-body">
                    <h6 className="product-item-title text-pine-green fw-4 fs-15">{product.title}</h6>
                    <div className="product-item-price text-regal-blue fw-7 fs-18">
                      {formatPrice(product.price)}
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}



export default SingelCategory;