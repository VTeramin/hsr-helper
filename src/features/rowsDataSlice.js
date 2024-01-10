import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        characterID: 1205,
        path: "Warrior",
        lvl: 80,
        lightConeID: 20002,
        lightConeLvl: 60,
        relicsID: [113, 113, 113, 113],
        ornamentsID: [306, 306],
        characterProgress: 30
    },
    {
        characterID: 1004,
        path: "Warlock",
        lvl: 80,
        lightConeID: 20004,
        lightConeLvl: 80,
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
            const path = action.payload.path;
            state[rowID].characterID = characterID;
            state[rowID].path = path;
        },
        changeLvl: (state, action) => {
            const rowID = action.payload.rowID;
            const lvl = action.payload.lvl;
            state[rowID].lvl = lvl;
        },
        changeLightCone: (state, action) => {
            const rowID = action.payload.rowID;
            state[rowID].lightConeID = action.payload.lightConeID;
        },
        changeLightConeLvl: (state, action) => {
            const rowID = action.payload.rowID;
            state[rowID].lightConeLvl = action.payload.lvl;
        }
    }
});

export const { 
    changeCharacter, 
    changeLvl, 
    changeLightCone, 
    changeLightConeLvl 
} = rowsDataSlice.actions;
export default rowsDataSlice.reducer;