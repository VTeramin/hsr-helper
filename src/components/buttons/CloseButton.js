import React from "react";
import { useDispatch } from "react-redux";
import { switchModalState } from "../../features/modalSlice";

const CharacterModal = () => {
    const dispatch = useDispatch();
    const closeModal = () => dispatch(switchModalState());

    return (
        <div className="close-button" onClick={closeModal}></div>
    )
};

export default CharacterModal;