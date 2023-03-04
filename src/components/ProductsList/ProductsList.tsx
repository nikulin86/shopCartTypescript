import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { setIsModalVisible, setModalData } from '../../store/modalSlice';
import { RootObject } from '../../Types';
import { formatPrice } from '../../utils/helper';
import SingelProduct from '../SingelProduct/SingelProduct';
import "./ProductsList.scss";
import ClipLoader from "react-spinners/ClipLoader";

interface ProductsListProps {
    products: RootObject[];
}

function ProductsList(props: ProductsListProps) {


    const dispatch = useAppDispatch();
    const isModalVisible = useAppSelector((state) => state.modal.isModalVisible);

    const viewModalHandler = (data: any) => {
        console.log(data)
        dispatch(setModalData(data));
        dispatch(setIsModalVisible(true));
    }

    return (
        <section className="product py-5 bg-ghost-white">
            {isModalVisible && <SingelProduct />}
            <div className="container">
                <div className="product-content">
                    <div className="section-title">
                        <h3 className="text-uppercase fw-7 text-regal-blue ls-1">
                            Our Products
                        </h3>
                    </div>
                    <div className="product-items grid">
                        {props.products.slice(0, 10).map(product => (
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
                        ))}
                        {/* {props.products.map(p => (
                            <div>{p.id}</div>
                        ))} */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductsList