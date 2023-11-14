import React from "react";

const Character = ({imgSource, characterID}) => {
    const characterIcon = `${imgSource}/icon/character/${characterID}.png`;

    return (
        <img src={characterIcon} className="square"></img>
    )
};

export default Character;