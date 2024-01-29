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
        relicsID: [113, 113, 113, 113, 306, 306],
        relicsLvl: [20, 20, 20, 20, 20, 20],
        characterProgress: 80
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
        relicsID: [114, 114, 114, 114, 307, 307],
        relicsLvl: [20, 20, 20, 20, 20, 20],
        characterProgress: 38
    }
];

function getProgress(characterData) {
    const charProgress = characterData.lvl / 80 * 25;
    const coneProgress = characterData.lightConeLvl / 80 * 25;
    const skillsProgress = Object.values(characterData.skillsLvl).reduce((acc, it) => acc + it, 0) / 49 * 25;
    const relicsProgress = characterData.relicsLvl.reduce((acc, it) => acc + it, 0) / 120 * 25;
    return charProgress + coneProgress + skillsProgress + relicsProgress;
}

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
            state[rowID].characterProgress = getProgress(state[rowID]);
        },
        changeLightCone: (state, action) => {
            const rowID = action.payload.rowID;
            state[rowID].lightConeID = action.payload.lightConeID;
        },
        changeLightConeLvl: (state, action) => {
            const rowID = action.payload.rowID;
            state[rowID].lightConeLvl = action.payload.lvl;
            state[rowID].characterProgress = getProgress(state[rowID]);
        },
        changeSkillsLvl: (state, action) => {
            const rowID = action.payload.rowID;
            state[rowID].skillsLvl = action.payload.lvl;
            state[rowID].characterProgress = getProgress(state[rowID]);
        },
        changeRelic: (state, action) => {
            const rowID = action.payload.rowID;
            state[rowID].relicsID[action.payload.relicInd] = action.payload.relicID;
        },
        changeFullRelicSet: (state, action) => {
            const rowID = action.payload.rowID;
            action.payload.relicInd < 4 ?
            [0, 1, 2, 3].forEach(ind => state[rowID].relicsID[ind] = action.payload.relicID) :
            [4, 5].forEach(ind => state[rowID].relicsID[ind] = action.payload.relicID);
        },
        changeRelicLvl: (state, action) => {
            const rowID = action.payload.rowID;
            state[rowID].relicsLvl[action.payload.relicInd] = action.payload.lvl;
            state[rowID].characterProgress = getProgress(state[rowID]);
        }
    }
});

export const { 
    changeCharacter, 
    changeLvl, 
    changeLightCone, 
    changeLightConeLvl,
    changeSkillsLvl,
    changeRelic,
    changeFullRelicSet,
    changeRelicLvl
} = rowsDataSlice.actions;
export default rowsDataSlice.reducer;