import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CharacterRow from "./components/CharacterRow";
import CharacterModal from "./components/modals/CharacterModal";
import LvlModal from "./components/modals/LvlModal";
import { switchModalState } from "./features/modalSlice";

const App = () => {
    const characterData = useSelector((state) => state.rowsData);
    const rows = characterData.map((rowData, ind) => {
        return <CharacterRow key={ind} rowID={ind} />
    })
    const modals = {
        Character: <CharacterModal />,
        Lvl: <LvlModal />
    };

    const { stateIsOn: modalIsOn, type: modalType} = useSelector((state) => state.modal);

    const dispatch = useDispatch();

    function closeModal(event) {
        if (event.target.classList.contains("shadow")) {
            dispatch(switchModalState());
        }
    }

    return (
        <>
            <div
                className={modalIsOn ? "main shadow" : "main"}
                onClick={closeModal}
            >
                {rows}
            </div>
            {modalIsOn && modals[modalType]}
        </>
    )
}

export default App;