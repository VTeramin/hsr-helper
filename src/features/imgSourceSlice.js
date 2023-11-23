import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    link: "https://cdn.jsdelivr.net/gh/Mar-7th/StarRailRes@master"
};

export const imgSourceSlice = createSlice({
    name: 'imgSource',
    initialState,
    reducers: {

    }
});

export default imgSourceSlice.reducer;