import React from "react";

const Skills = ({imgSource, characterID}) => {
    const skillsArray = [
        "_basic_atk",
        "_talent",
        "_technique",
        "_ultimate"
    ];
    const skillsIconsArray = skillsArray.map(skillName => `${imgSource}/icon/skill/${characterID + skillName}.png`)

    return (
        <div className="square skills">
            {skillsIconsArray.map(icon => <img src={icon}></img>)}
        </div>
    )
};

export default Skills;