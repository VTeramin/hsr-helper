import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { switchModalState } from "../../features/modalSlice";
import { changeModal } from "../../features/modalSlice";

const Relic = ({ rowID, relicID, ind }) => {
    const characterData = useSelector((state) => state.rowsData[rowID]);
    const imgSource = useSelector((state) => state.imgSource.link);
    const relicIcon = `${imgSource}/icon/relic/${relicID}_${ind < 4 ? ind : ind - 4}.png`;
    const dispatch = useDispatch();

    function showModal() {
        dispatch(switchModalState());
        dispatch(changeModal({ rowID, type: "Relic", ind }));
    }

    const style = {
        height: `${70 - characterData.relicsLvl[ind] / 20 * 70}px`
    };

    return <div>
        <div className="square square-shadow" style={style} onClick={showModal}></div>
        <img src={relicIcon} className="square" onClick={showModal}></img>
    </div>
};

export default Relic;