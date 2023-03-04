import React, { useEffect } from 'react';
import Category from '../../components/Category/Category';
import SingelCategory from '../../components/SingelCategory/SingelCategory';
import Slider from '../../components/Slider/Slider';
import { fetchCategories } from '../../store/actions/fetchCategories';
import fetchProductsByCategory from '../../store/actions/fetchProductsByCategory';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import "./Homepage.scss";
import { fetchProducts } from '../../store/actions/fetchProducts';
import ProductsList from '../../components/ProductsList/ProductsList';
import { SpinnerCircular } from 'spinners-react';



function HomePage() {



  const dispatch = useAppDispatch();

  const categories = useAppSelector((state) => state.category.categoryData);
  const productsByCategory = useAppSelector((state) => state.category.productByCategory);
  const products = useAppSelector((state) => state.products.product);
  const loading = useAppSelector((state) => state.products.loading);
  const error = useAppSelector((state) => state.products.error);

  console.log(productsByCategory)
  console.log(products)

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProductsByCategory(1));
    dispatch(fetchProducts());
    // dispatch(fetchProductsByCategory(2));
  }, [])

  // console.log(productsByCategory[0])
  // console.log(productsByCategory[1])
  return (
    <div>
      <Slider />
      <div className="spinner">
        {loading && <div>
          <SpinnerCircular /></div>}
      </div>
      <div className="error">
      {!loading && error ? <div>error: {error}</div> : null}
      </div>

  
      <Category categories={categories} />
      <section>
        <ProductsList products={products} />
        { }
        <SingelCategory productsByCategory={productsByCategory} />
      </section>
    </div>
  )
}

export default HomePage;