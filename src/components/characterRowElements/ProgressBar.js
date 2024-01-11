import React from 'react';
import { useSelector, useDispatch } from "react-redux";

const ProgressBar = ({ rowID }) => {
    const characterData = useSelector((state) => state.rowsData[rowID]);
    const styles = {
        width: `${characterData.characterProgress}%`
    };

    return (
        <div className="progress-bar">
            <div className="progress-bar__filled" style={styles}></div>
        </div>
    )
};

export default ProgressBar;