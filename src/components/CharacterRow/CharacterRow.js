import React from "react";
import Character from "./Character";
import Lvl from "./Lvl";
import LightCone from "./LightCone";
import Skills from "./Skills";
import Relic from "./Relic";
import ProgressBar from "./ProgressBar";

const CharacterRow = () => {
    const imgSource = "https://cdn.jsdelivr.net/gh/Mar-7th/StarRailRes@master";
    const characterID = "1208";
    const lvl = 80;
    const lightConeID = "24002";
    const relicID = "106";
    const relicIndices = [0, 1, 2, 3];
    const ornamentID = "302";
    const ornamentIndices = [0, 1];
    const characterProgress = 30;

    return (
        <div className="character-row">
            <div className="character__data">
                <Character imgSource={imgSource} characterID={characterID} />
                <Lvl lvl={lvl} />
                <LightCone imgSource={imgSource} lightConeID={lightConeID} />
                <Skills imgSource={imgSource} characterID={characterID} />
                {relicIndices.map(index => <Relic index={index} imgSource={imgSource} relicID={relicID} />)}
                {ornamentIndices.map(index => <Relic index={index} imgSource={imgSource} relicID={ornamentID} />)}
            </div>
            <ProgressBar characterProgress={characterProgress} />
        </div>
    )
}

export default CharacterRow;