import React from "react";

const Relic = ({index, imgSource, relicID}) => {
    const relicIcon = `${imgSource}/icon/relic/${relicID}_${index}.png`;

    return (
        <img src={relicIcon} className="square"></img>
    )
};

export default Relic;