import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categorySlice";
import modalReducer from "./modalSlice";
import productsReducer from "./productSlice";
import cartReducer from "./cartSlice";

const rootReducer = combineReducers({
    category: categoryReducer,
    modal: modalReducer,
    products: productsReducer,
    cart: cartReducer
})

export function setupStore() {
    return configureStore({
        reducer: rootReducer
    })
}



export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"]; 