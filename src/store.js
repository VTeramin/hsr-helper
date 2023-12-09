import { configureStore } from "@reduxjs/toolkit";
import rowsDataReducer from "./features/rowsDataSlice";
import imgSourceReducer from "./features/imgSourceSlice";
import modalSliceReducer from "./features/modalSlice";

export const store = configureStore({
    reducer: {
        rowsData: rowsDataReducer,
        imgSource: imgSourceReducer,
        modal: modalSliceReducer
    }
})