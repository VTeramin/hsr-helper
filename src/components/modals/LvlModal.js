import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { switchModalState } from "../../features/modalSlice";
import { changeLvl } from "../../features/rowsDataSlice";

const LvlModal = () => {
    const rowID = useSelector((state) => state.modal.rowID);
    const initialLvl = useSelector((state) => state.rowsData[rowID].lvl);
    const dispatch = useDispatch();

    const [lvl, setLvl] = useState(initialLvl);

    function handleLvlChange(event) {
        setLvl(event.target.value);
    }

    function closeModal() {
        dispatch(switchModalState());
        dispatch(changeLvl({rowID, lvl}));
    }

    return (
        <div className="modal-window lvl-modal">
            <input className="lvl-modal__range" type="range" min="0" max="80" step="1" value={lvl} onChange={handleLvlChange} />
            <div className="square square__lvl">{lvl}</div>
            <div className="close-button" onClick={closeModal}></div>
        </div>
    )
};

export default LvlModal;