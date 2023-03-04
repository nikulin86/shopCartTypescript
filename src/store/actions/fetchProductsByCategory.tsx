// export const fetchProductsByCategory = (categoryID, dataType) => {
//     return async function fetchCategoryProductThunk(dispatch) {
//       if(dataType === "all") dispatch(setCategoriesProductAll(STATUS.LOADING));
//       if(dataType === "single") dispatch(setCategoriesStatusSingle(STATUS.LOADING));


//       try {
//         const response =await fetch(`${BASE_URL}categories/${categoryId}/products`);
//         const data = await response.json();
//         if(dataType === "all") {
//             dispatch(setCategoriesProductAll(data.slice(0, 10)));
//             dispatch(setCategoriesStatusAll(STATUS.IDEL))
//         };

//         if(dataType === "single") {
//             dispatch(setCategoriesProductSingle(data.slice(0, 20)));
//             dispatch(setCategoriesStatusSingle(STATUS.IDEL))
//         }
//       } catch(error) {
//         if(dataType === "all") dispatch(setCategoriesStatusAll(STATUS.ERROR));
//         if(dataType === "single") dispatch(setCategoriesStatusSingle(STATUS.ERROR))
//       }
//     }
// };
import { createAsyncThunk } from '@reduxjs/toolkit';
import React from 'react'
import axios from 'axios';

export const fetchProductsByCategory  =
    createAsyncThunk(
        "category/fetchProductsByCategory",
        async (categoryID: number) => {
            const { data } = await axios.get(`https://api.escuelajs.co/api/v1/categories/${categoryID}/products`);
            console.log(data)
            return data;
      
        }
    )
export default fetchProductsByCategory