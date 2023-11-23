import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        characterID: 1205,
        lvl: 80,
        lightConeID: 24001,
        relicsID: [113, 113, 113, 113],
        ornamentsID: [306, 306],
        characterProgress: 30
    }
];

export const rowsDataSlice = createSlice({
    name: 'rowsData',
    initialState,
    reducers: {
        changeCharacterID: (state) => {
            state[0].characterID += 1;
        }
    }
});

export const { changeCharacterID } = rowsDataSlice.actions;
export default rowsDataSlice.reducer;