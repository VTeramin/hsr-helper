import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CloseButton from "../buttons/CloseButton";
import { changeSkillsLvl } from "../../features/rowsDataSlice";

const SkillsModal = () => {
    const rowID = useSelector((state) => state.modal.rowID);
    const characterData = useSelector((state) => state.rowsData[rowID]);
    const imgSource = useSelector((state) => state.imgSource.link);
    const [lvl, setLvl] = useState(characterData.skillsLvl);
    const dispatch = useDispatch();

    const skillsNames = [
        "_basic_atk",
        "_skill",
        "_ultimate",
        "_talent",
        "_technique"
    ];
    const rows = skillsNames.map((skillName, ind) => {
        function handleLvlChange(event) {
            setLvl(prev => ({
                ...prev,
                [skillName]: event.target.value
            }));
        }
        const skillsTitles = ["Basic attack", "Skill", "Ultimate", "Talent", "Bonus stats and abilities"];
        const maxLvl = skillName === "_basic_atk" ? "6" : skillName === "_technique" ? "13" : "10";
        return (
            <div className="skills-row" key={ind}>
                <img className="skills-row__icon square" src={`${imgSource}/icon/skill/${characterData.characterID + skillName}.png`}></img>
                <h3 className="skills-row__title title">{skillsTitles[ind]}</h3>
                <input
                    className="skills-row__range"
                    type="range"
                    min="0"
                    max={maxLvl}
                    step="1"
                    value={lvl[skillName]}
                    onChange={handleLvlChange}
                ></input>
                <div className="skills-row__lvl square square__lvl">{lvl[skillName]}</div>
            </div>
        )
    });

    useEffect(() => {
        dispatch(changeSkillsLvl({ rowID, lvl }));
    }, [lvl]);

    return (
        <div className="modal-window skills-modal">
            <h2 className="skills-modal__title title">Set skills level</h2>
            <CloseButton />
            <div className="skills-modal__skills">
                {rows}
            </div>
        </div>
    )
};

export default SkillsModal;