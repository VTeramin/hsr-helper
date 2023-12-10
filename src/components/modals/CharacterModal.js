import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { switchModalState } from "../../features/modalSlice";
import { changeCharacter } from "../../features/rowsDataSlice";

const CharacterModal = () => {
    const imgSource = useSelector((state) => state.imgSource.link);
    const rowID = useSelector((state) => state.modal.rowID);
    const [charactersIDs, setCharactersIDs] = useState([]);
    const [charactersIcons, setCharactersIcons] = useState([]);
    const dispatch = useDispatch();

    function closeModal() {
        dispatch(switchModalState());
    }

    function selectCharacter(event) {
        dispatch(changeCharacter({
            rowID,
            characterID: event.target.id
        }));
        closeModal();
    }

    useEffect(() => {
        const requestURL = `${imgSource}/index_new/en/nickname.json`;
        fetch(requestURL)
            .then(response => response.json())
            .then(data => setCharactersIDs(Object.keys(data.characters)));
    }, []);

    useEffect(() => {
        setCharactersIcons([]);
        charactersIDs.forEach(ID => {
            const characterIcon = `${imgSource}/icon/character/${ID}.png`;
            if (characterIcon) {
                setCharactersIcons(prev => [
                    ...prev,
                    <img
                        key={ID}
                        id={ID}
                        src={characterIcon}
                        className="square"
                        onClick={selectCharacter}
                    ></img>
                ])
            }
        })
    }, [charactersIDs]);

    return (
        <div className="modal-window character-modal">
            <div className="character-modal__title">Choose a character</div>
            <div className="close-button" onClick={closeModal}></div>
            <div className="character-modal__icons">
                {charactersIcons}
            </div>
        </div>
    )
};

export default CharacterModal;