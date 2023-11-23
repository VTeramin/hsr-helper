import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Character from "./Character";
import Lvl from "./Lvl";
import LightCone from "./LightCone";
import Skills from "./Skills";
import Relic from "./Relic";
import ProgressBar from "./ProgressBar";

const CharacterRow = () => {
    const rowID = 0;
    const characterData = useSelector((state) => state.rowsData[rowID]);

    const relics = characterData.relicsID.map((relicID, ind) => {
        return <Relic
            key={"r" + ind}
            relicID={relicID}
            ind={ind}
        />;
    });
    const ornaments = characterData.ornamentsID.map((relicID, ind) => {
        return <Relic
            key={"o" + ind}
            relicID={relicID}
            ind={ind}
        />;
    });

    return (
        <div className="character-row">
            <div className="character__data">
                <Character rowID={rowID} />
                <Lvl rowID={rowID} />
                <LightCone rowID={rowID} />
                <Skills rowID={rowID} />
                {relics}
                {ornaments}
            </div>
            <ProgressBar rowID={rowID} />
        </div>
    )
}

export default CharacterRow;