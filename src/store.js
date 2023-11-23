import { configureStore } from "@reduxjs/toolkit";
import rowsDataReducer from "./features/rowsDataSlice";
import imgSourceReducer from "./features/imgSourceSlice";

export const store = configureStore({
    reducer: {
        rowsData: rowsDataReducer,
        imgSource: imgSourceReducer
    }
})