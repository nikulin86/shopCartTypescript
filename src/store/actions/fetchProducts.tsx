import React, { useState } from 'react';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../utils/apiURL';



export const fetchProducts  =
    createAsyncThunk(
        "products/fetchProducts",
        async () => {
            const { data } = await axios.get(`https://api.escuelajs.co/api/v1/products`);
            console.log(data)
            return data;
        }
    )