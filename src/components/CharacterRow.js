import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Character from "./characterRow/Character";
import Lvl from "./characterRow/Lvl";
import LightCone from "./characterRow/LightCone";
import Skills from "./characterRow/Skills";
import Relic from "./characterRow/Relic";
import ProgressBar from "./characterRow/ProgressBar";

const CharacterRow = ({rowID}) => {
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
            <div className="character-row__squares-container">
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