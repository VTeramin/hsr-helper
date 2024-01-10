import React from "react";
import CloseButton from "../buttons/CloseButton";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeLvl } from "../../features/rowsDataSlice";

const LvlModal = () => {
    const rowID = useSelector((state) => state.modal.rowID);
    const initialLvl = useSelector((state) => state.rowsData[rowID].lvl);
    const dispatch = useDispatch();

    const [lvl, setLvl] = useState(initialLvl);

    function handleLvlChange(event) {
        setLvl(event.target.value);
    }

    useEffect(() => {
        dispatch(changeLvl({rowID, lvl}));
    }, [lvl])

    return (
        <div className="modal-window lvl-modal">
            <div className="lvl-modal__title">Set character level</div>
            <input className="lvl-modal__range" type="range" min="0" max="80" step="1" value={lvl} onChange={handleLvlChange} />
            <div className="lvl-modal__lvl square square__lvl">{lvl}</div>
            <CloseButton />
        </div>
    )
};

export default LvlModal;