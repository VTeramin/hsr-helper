import React from 'react';

const ProgressBar = ({ characterProgress }) => {
    const styles = {
        width: `${characterProgress}%`
    }
    
    return (
        <div className="progress-bar">
            <div className="progress-bar--filled" style={styles}></div>
        </div>
    )
}

export default ProgressBar;