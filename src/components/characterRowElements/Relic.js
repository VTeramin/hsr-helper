import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Relic = ({relicID, ind}) => {
    const imgSource = useSelector((state) => state.imgSource.link);
    const relicIcon = `${imgSource}/icon/relic/${relicID}_${ind}.png`;
    
    return (
        <img src={relicIcon} className="square"></img>
    )
};

export default Relic;