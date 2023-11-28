import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Lvl = ({rowID}) => {
    const characterData = useSelector((state) => state.rowsData[rowID]);

    return (
        <div className="square">
            <p className="square__lvl">{characterData.lvl}</p>
        </div>
    )
};

export default Lvl;