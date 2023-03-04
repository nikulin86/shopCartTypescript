import { fetchCategories } from './actions/fetchCategories';
import { useAppDispatch } from './hooks/hooks';
import { createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from '../utils/apiURL';
import { STATUS } from "../utils/status";
import { Categories, ICategory, RootObject } from '../Types';
import fetchProductsByCategory from './actions/fetchProductsByCategory';

// const dispatch = useAppDispatch();

interface InitialState {
    categoryData: Categories[];
    productByCategory: RootObject[];
  }



  const initialState: InitialState = {
    // categoryData: {
    //     id: 0,
    //     title: "",
    //     price: 0,
    //     description: "",
    //     images: [],
    //     creationAt: new Date,
    //     updatedAt: new Date,
    //     category: {
    //       id: 0,
    //       name: "",
    //       image: "",
    //       creationAt: new Date,
    //       updatedAt: new Date,
    //     }
    // }
    categoryData: [],
    productByCategory: []
  };


const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        // setCategories(state, action) {
        //     state.data = action.payload;
        // },
        // setStatus(state, action) {
        //     state.data = action.payload;
        // },
        // setCategoriesProductAll(state, action) {
        //     state.catProductAll.push(action.payload)  
        // },

        // setCategoriesStatusAll(state, action) {
        //     state.catProductAllStatus = action.payload;
        // },
        // setCategoriesProductSingle(state, action) {
        //     state.catProductSingle = action.payload;
        // },
        // setCategoriesStatusSingle(state, action) {
        //     state.catProductSingleStatus = action.payload;
        // },


    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.fulfilled, (state, action) => {
            state.categoryData = action.payload;
          });
        builder.addCase(fetchProductsByCategory.fulfilled, (state, action) => {
            state.productByCategory = action.payload;
          });
    }
});


export const {  } = categorySlice.actions;


export default categorySlice.reducer;











