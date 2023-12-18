import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { switchModalState } from "../../features/modalSlice";
import { changeModal } from "../../features/modalSlice";

const Lvl = ({rowID}) => {
    const characterData = useSelector((state) => state.rowsData[rowID]);

    const dispatch = useDispatch();

    function showModal() {
        dispatch(switchModalState(rowID));
        dispatch(changeModal({rowID, type: "Lvl"}));
    }

    return (
        <div className="square" onClick={showModal}>
            <p className="square__lvl">{characterData.lvl}</p>
        </div>
    )
};

export default Lvl;