import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    stateIsOn: false,
    type: "",
    rowID: 0,
    ind: 0
};

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        switchModalState: (state) => {
            state.stateIsOn = !state.stateIsOn;
        },
        changeModal: (state, action) => {
            state.type = action.payload.type;
            state.rowID = action.payload.rowID;
            state.ind = action.payload.ind;
        }
    }
});

export const { switchModalState, changeModal } = modalSlice.actions;
export default modalSlice.reducer;