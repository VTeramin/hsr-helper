import React from "react";
import CloseButton from "../buttons/CloseButton";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCharacter } from "../../features/rowsDataSlice";
import { switchModalState } from "../../features/modalSlice";

const CharacterModal = () => {
    const imgSource = useSelector((state) => state.imgSource.link);
    const rowID = useSelector((state) => state.modal.rowID);
    const [charactersData, setCharactersData] = useState([]);
    const [charactersIcons, setCharactersIcons] = useState([]);
    const dispatch = useDispatch();

    function closeModal() {
        dispatch(switchModalState());
    }

    function selectCharacter(event) {
        const characterID = event.target.id;
        const path = charactersData.find(el => el.ID === characterID).path;
        dispatch(changeCharacter({
            rowID,
            characterID,
            path
        }));
        closeModal();
    }

    useEffect(() => {
        const requestURL = `${imgSource}/index_new/en/characters.json`;
        fetch(requestURL)
            .then(response => response.json())
            .then(data => {
                const keys = Object.keys(data);
                const filteredData = keys.map(key => {
                    return {
                        ID: key,
                        path: data[key].path
                    }
                })
                setCharactersData(filteredData);
            });
    }, []);

    useEffect(() => {
        setCharactersIcons([]);
        charactersData.forEach(el => {
            const ID = el.ID;
            if (ID) {
                const characterIcon = `${imgSource}/icon/character/${ID}.png`;
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
    }, [charactersData]);

    return (
        <div className="modal-window character-modal">
            <h2 className="character-modal__title">Choose a character</h2>
            <CloseButton />
            <div className="character-modal__icons">
                {charactersIcons}
            </div>
        </div>
    )
};

export default CharacterModal;