import { createSlice } from "@reduxjs/toolkit";
import { RootObject } from "../Types";
import { STATUS } from "../utils/status";
import { fetchProducts } from "./actions/fetchProducts";

interface InitialState {
    product: RootObject[];
    loading: boolean,
    error: string
  }

  const initialState: InitialState = {
    product:[],
    loading: false,
    error: ''
  };


const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        // setProducts(state, action) {
        //     state.data = action.payload;
        // },

    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.loading = true
            state.error = ""
          });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.product = action.payload
            state.loading = false
            state.error = ""
           })
        builder.addCase(fetchProducts.rejected, (state, action) => {
          state.loading = false
          state.error = action.error.message || "error"
    })
  }
})


// export  const {setProducts} = productSlice.actions;
export default productSlice.reducer;

