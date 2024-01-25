import React from "react";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import CloseButton from "../buttons/CloseButton";
import { changeLightCone } from "../../features/rowsDataSlice";
import { changeLightConeLvl } from "../../features/rowsDataSlice";
import { getLightConesData } from "../methods/getLightConesData";

const LightConeModal = () => {
    const imgSource = useSelector((state) => state.imgSource.link);
    const rowID = useSelector((state) => state.modal.rowID);
    const characterData = useSelector((state) => state.rowsData[rowID]);
    const [lightConesData, setLightConesData] = useState([]);
    const [description, setDescription] = useState("");
    const [lvl, setLvl] = useState(characterData.lightConeLvl);
    const dispatch = useDispatch();

    useEffect(() => {
        getLightConesData(imgSource)
            .then(data => setLightConesData(data))
            .catch(error => console.log(error));
    }, []);

    const lightCones = [...lightConesData]
        .filter(el => el.path === characterData.path)
        .map(el => {
            return <img
                key={el.ID}
                id={el.ID}
                src={el.icon}
                className="square"
                onClick={selectLightCone}
            ></img>
        });

    function selectLightCone(event) {
        dispatch(changeLightCone({
            rowID,
            lightConeID: event.target.id
        }));
    }

    useEffect(() => {
        if (lightConesData.length) {
            setDescription(lightConesData.find(cone => cone.ID == characterData.lightConeID).description);
        }
    }, [lightConesData, characterData.lightConeID]);

    function handleLvlChange(event) {
        setLvl(event.target.value);
    }
    useEffect(() => {
        dispatch(changeLightConeLvl({ rowID, lvl }));
    }, [lvl]);

    const imgStyle = {
        backgroundImage: `url("${imgSource}/image/light_cone_portrait/${characterData.lightConeID}.png")`
    };

    const [height, setHeight] = useState(0);
    const ref = useRef(null)
    useEffect(() => {
        setHeight(ref.current.clientHeight)
    });

    return (
        <div className="modal-window lightcone-modal">
            <h2 className="lightcone-modal__title title">Choose a Light Cone and set it`s lvl</h2>
            <div className="lightcone-modal__lightcones">
                {lightCones}
            </div>
            <div className="lightcone-modal__selected-lightcone" ref={ref} style={imgStyle}></div>
            <div className="lightcone-modal__lvl square square__lvl">{lvl}</div>
            <input
                className="lightcone-modal__range"
                type="range"
                min="0"
                max="80"
                step="1"
                value={lvl}
                onChange={handleLvlChange}
                style={{ width: height }}
            />
            <p className="lightcone-modal__description">{description}</p>
            <CloseButton />
        </div>
    )
};

export default LightConeModal;