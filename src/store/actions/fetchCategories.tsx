import React, { useState } from 'react';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../utils/apiURL';



export const fetchCategories  =
    createAsyncThunk(
        "category/fetchCategories",
        async () => {
            const { data } = await axios.get(`https://api.escuelajs.co/api/v1/categories`);
            console.log(data)
            return data.slice(0, 5);
      
        }
    )





// return async function fetchCategoryThunk(dispatch) {
//         dispatch(setStatus(STATUS.LOADING));
//         try {
//             const response = await fetch(`${BASE_URL}categories`);v 
//             const data = await response.json();
//             dispatch(setStatus(STATUS.IDEL))

//         }
//         catch(error) {
//             dispatch(setStatus(STATUS.ERROR))
//         }
//     }