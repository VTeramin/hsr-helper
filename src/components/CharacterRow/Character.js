import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { switchModalState } from "../../features/modalSlice";

const Character = ({rowID}) => {
    const characterData = useSelector((state) => state.rowsData[rowID]);
    const imgSource = useSelector((state) => state.imgSource.link);
    const characterIcon = `${imgSource}/icon/character/${characterData.characterID}.png`;

    const dispatch = useDispatch();

    function showModal() {
        dispatch(switchModalState(rowID));
    }

    return (
        <img src={characterIcon} className="square" onClick={showModal}></img>
    )
};

export default Character;