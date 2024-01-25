import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CloseButton from "../buttons/CloseButton";
import { changeCharacter } from "../../features/rowsDataSlice";
import { switchModalState } from "../../features/modalSlice";
import { getCharactersData } from "../methods/getCharactersData";

const CharacterModal = () => {
    const imgSource = useSelector((state) => state.imgSource.link);
    const rowID = useSelector((state) => state.modal.rowID);
    const [charactersData, setCharactersData] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        getCharactersData(imgSource)
            .then(data => setCharactersData(data))
            .catch(error => console.log(error));
    }, []);

    const icons = [...charactersData].map(el => {
        return <img
            key={el.ID}
            id={el.ID}
            src={`${imgSource}/icon/character/${el.ID}.png`}
            className="square"
            onClick={selectCharacter}
        ></img>
    });

    function selectCharacter(event) {
        const characterID = event.target.id;
        const path = charactersData.find(el => el.ID === characterID).path;
        dispatch(changeCharacter({
            rowID,
            characterID,
            path
        }));
        dispatch(switchModalState());
    }

    return (
        <div className="modal-window character-modal">
            <h2 className="character-modal__title title">Choose a character</h2>
            <CloseButton />
            <div className="character-modal__icons">
                {icons}
            </div>
        </div>
    )
};

export default CharacterModal;