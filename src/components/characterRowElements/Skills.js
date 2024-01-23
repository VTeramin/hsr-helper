import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { switchModalState } from "../../features/modalSlice";
import { changeModal } from "../../features/modalSlice";

const Skills = ({ rowID }) => {
    const characterData = useSelector((state) => state.rowsData[rowID]);
    const imgSource = useSelector((state) => state.imgSource.link);
    const skillsNames = [
        "_basic_atk",
        "_skill",
        "_ultimate",
        "_talent"
    ];
    const skillsIconsArray = skillsNames.map(skillName => `${imgSource}/icon/skill/${characterData.characterID + skillName}.png`);
    const dispatch = useDispatch();
    
    function showModal() {
        dispatch(switchModalState());
        dispatch(changeModal({ rowID, type: "Skills" }));
    }

    const sumSkillsLvl = Object.values(characterData.skillsLvl).reduce((acc, it) => acc + Number(it), 0);
    const style = {
        height: `${70 - sumSkillsLvl / 49 * 70}px`
    };

    return (
        <div>
            <div className="square square-shadow" style={style} onClick={showModal}></div>
            <div className="square skills" onClick={showModal}>
                {skillsIconsArray.map((icon, ind) => <img key={ind} src={icon}></img>)}
            </div>
        </div>
    )
};

export default Skills;