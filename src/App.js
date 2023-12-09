import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CharacterRow from "./components/CharacterRow";
import CharacterModal from "./components/modals/CharacterModal";
import { switchModalState } from "./features/modalSlice";

const App = () => {
    const characterData = useSelector((state) => state.rowsData);
    const rows = characterData.map((rowData, ind) => {
        return <CharacterRow key={ind} rowID={ind} />
    })

    const modalIsOn = useSelector((state) => state.modal.stateIsOn);

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
            {modalIsOn && <CharacterModal />}
        </>
    )
}

export default App;