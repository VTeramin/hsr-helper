import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCharacterID } from "../../features/rowsDataSlice"

const Character = ({rowID}) => {
    const characterData = useSelector((state) => state.rowsData[rowID]);
    const imgSource = useSelector((state) => state.imgSource.link);
    const dispatch = useDispatch();
    const characterIcon = `${imgSource}/icon/character/${characterData.characterID}.png`;

    function handleClick() {
        dispatch(changeCharacterID());
    }

    return (
        <img src={characterIcon} className="square" onClick={handleClick}></img>
    )
};

export default Character;