import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        characterID: 1205,
        lvl: 80,
        lightConeID: 24001,
        relicsID: [113, 113, 113, 113],
        ornamentsID: [306, 306],
        characterProgress: 30
    },
    {
        characterID: 1206,
        lvl: 80,
        lightConeID: 24002,
        relicsID: [114, 114, 114, 114],
        ornamentsID: [307, 307],
        characterProgress: 38
    }
];

export const rowsDataSlice = createSlice({
    name: 'rowsData',
    initialState,
    reducers: {
        changeCharacter: (state, action) => {
            const rowID = action.payload.rowID;
            const characterID = action.payload.characterID;
            state[rowID].characterID = characterID;
        }
    }
});

export const { changeCharacter } = rowsDataSlice.actions;
export default rowsDataSlice.reducer;