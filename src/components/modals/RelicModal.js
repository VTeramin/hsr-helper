import React from "react";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import CloseButton from "../buttons/CloseButton";
import { changeRelic } from "../../features/rowsDataSlice";
import { changeFullRelicSet } from "../../features/rowsDataSlice";
import { changeRelicLvl } from "../../features/rowsDataSlice";
import { getRelicsData } from "../methods/getRelicsData";

const RelicModal = () => {
    const imgSource = useSelector((state) => state.imgSource.link);
    const rowID = useSelector((state) => state.modal.rowID);
    const characterData = useSelector((state) => state.rowsData[rowID]);
    const relicInd = useSelector((state) => state.modal.ind);
    const [relicsData, setRelicsData] = useState([]);
    const [lvl, setLvl] = useState(characterData.relicsLvl[relicInd]);
    const [description, setDescription] = useState("");
    const [isFullSet, setIsFullSet] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        getRelicsData(imgSource)
            .then(data => setRelicsData(data))
            .catch(error => console.log(error));
    }, []);

    const relics = [...relicsData]
        .filter(el => relicInd > 3 ? el.ID > 300 : el.ID < 300)
        .map(el => {
            return <img
                key={el.ID}
                id={el.ID}
                src={`${imgSource}/icon/relic/${el.ID}_${relicInd < 4 ? relicInd : relicInd - 4}.png`}
                className="square"
                onClick={selectRelic}
            ></img>
        });

    function selectRelic(event) {
        const changeFunction = isFullSet ? changeFullRelicSet : changeRelic;
        dispatch(changeFunction({
            rowID,
            relicID: event.target.id,
            relicInd
        }));
    }

    function handleLvlChange(event) {
        setLvl(event.target.value);
    }
    useEffect(() => {
        dispatch(changeRelicLvl({ rowID, lvl, relicInd }));
    }, [lvl]);

    const imgStyle = {
        backgroundImage: `url("${imgSource}/icon/relic/${characterData.relicsID[relicInd]}.png")`
    };

    useEffect(() => {
        if (relicsData.length) {
            setDescription(relicsData.find(relic => relic.ID == characterData.relicsID[relicInd]).description);
        }
    }, [relicsData, characterData.relicsID[relicInd]]);

    return (
        <div className="modal-window relic-modal">
            <h2 className="relic-modal__title title">Choose a relic and set it`s lvl</h2>
            <div className="relic-modal__selected-relic square" style={imgStyle}></div>
            <p className="relic-modal__description">
                {`2pc: ${description[0]}`}<br />
                {`4pc: ${description[1]}`}
            </p>
            <input
                className="relic-modal__range"
                type="range"
                min="0"
                max="20"
                step="1"
                value={lvl}
                onChange={handleLvlChange}
            />
            <div className="relic-modal__lvl square square__lvl">{lvl}</div>
            <label className="relic-modal__checkbox-label" htmlFor="set">
                <input
                    className="relic-modal__checkbox"
                    type="checkbox"
                    id="set"
                    name="set"
                    onChange={() => setIsFullSet(!isFullSet)}
                    checked={isFullSet}
                />
                Select full set
            </label>
            <div className="relic-modal__relics">
                {relics}
            </div>
            <CloseButton />
        </div>
    )
};

export default RelicModal;