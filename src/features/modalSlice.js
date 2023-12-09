import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    stateIsOn: false,
    modalType: "",
    rowID: 0
};

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        switchModalState: (state, action) => {
            state.stateIsOn = !state.stateIsOn;
            state.rowID = action.payload;
        }
    }
});

export const { switchModalState } = modalSlice.actions;
export default modalSlice.reducer;