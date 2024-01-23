import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        characterID: 1205,
        path: "Warrior",
        lvl: 80,
        lightConeID: 20002,
        lightConeLvl: 60,
        skillsLvl: {
            _basic_atk: 6,
            _skill: 10,
            _ultimate: 10,
            _talent: 10,
            _technique: 10
        },
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
        skillsLvl: {
            _basic_atk: 0,
            _skill: 0,
            _ultimate: 0,
            _talent: 0,
            _technique: 0
        },
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
        },
        changeSkillsLvl: (state, action) => {
            const rowID = action.payload.rowID;
            state[rowID].skillsLvl = action.payload.lvl;
        }
    }
});

export const { 
    changeCharacter, 
    changeLvl, 
    changeLightCone, 
    changeLightConeLvl,
    changeSkillsLvl
} = rowsDataSlice.actions;
export default rowsDataSlice.reducer;