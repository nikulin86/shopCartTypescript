
import { createSlice } from "@reduxjs/toolkit";
import {  RootObject } from "../Types";

interface InitialState {
    data: RootObject,
    isModalVisible: boolean
}


const initialState: InitialState = {
    data: {
        id: 0,
        title: "",
        price: 0,
        description: "",
        images: [],
        creationAt: new Date,
        updatedAt: new Date,
        category: {
            id: 0,
            name: "",
            image: "",
            creationAt: new Date,
            updatedAt: new Date,
        },
    },
    isModalVisible: false
  };


const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setModalData(state, action) {
            state.data = action.payload;
        },
        setIsModalVisible(state, action) {
            state.isModalVisible = action.payload;
        }
    }
});


export  const {setModalData, setIsModalVisible} = modalSlice.actions;
export default modalSlice.reducer;