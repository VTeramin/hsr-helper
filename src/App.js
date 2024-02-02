import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { switchModalState } from "./features/modalSlice";
import CharacterRow from "./components/CharacterRow";

import CharacterModal from "./components/modals/CharacterModal";
import LvlModal from "./components/modals/LvlModal";
import LightConeModal from "./components/modals/LightConeModal";
import SkillsModal from "./components/modals/SkillsModal";
import RelicModal from "./components/modals/RelicModal";

const App = () => {
    const dispatch = useDispatch();
    const characterData = useSelector((state) => state.rowsData);
    const {
        stateIsOn: modalIsOn,
        type: modalType
    } = useSelector((state) => state.modal);

    const rows = characterData.map((rowData, ind) => {
        return <CharacterRow key={ind} rowID={ind} />
    });

    const modals = {
        Character: <CharacterModal />,
        Lvl: <LvlModal />,
        LightCone: <LightConeModal />,
        Skills: <SkillsModal />,
        Relic: <RelicModal />
    };

    function closeModal(event) {
        if (event.target.classList.contains("shadow")) {
            dispatch(switchModalState());
        }
    }

    return (
        <div
            className={`main ${modalIsOn ? "shadow" : ""}`}
            onClick={closeModal}
        >
            {rows}
            {modalIsOn && modals[modalType]}
        </div>
    )
};

export default App;