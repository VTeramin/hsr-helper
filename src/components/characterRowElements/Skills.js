import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Skills = ({ rowID }) => {
    const characterData = useSelector((state) => state.rowsData[rowID]);
    const imgSource = useSelector((state) => state.imgSource.link);

    const skillsArray = [
        "_basic_atk",
        "_talent",
        "_technique",
        "_ultimate"
    ];
    const skillsIconsArray = skillsArray.map(skillName => `${imgSource}/icon/skill/${characterData.characterID + skillName}.png`);

    return (
        <div className="square skills">
            {skillsIconsArray.map((icon, ind) => <img key={ind} src={icon}></img>)}
        </div>
    )
};

export default Skills;