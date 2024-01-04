import React from "react";
import CloseButton from "../buttons/CloseButton";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeLightCone } from "../../features/rowsDataSlice";

const LightCone = () => {
    const imgSource = useSelector((state) => state.imgSource.link);
    const rowID = useSelector((state) => state.modal.rowID);
    const rowPath = useSelector((state) => state.rowsData[rowID].path);
    const currentLightCone = useSelector((state) => state.rowsData[rowID].lightConeID);
    const [lightConesData, setLightConesData] = useState([]);
    const [lightConesIcons, setLightConesIcons] = useState([]);
    const [activeLightCone, setActiveLightCone] = useState({
        ID: currentLightCone,
        description: ""
    });
    const dispatch = useDispatch();

    useEffect(() => {
        const requestURLs = [
            `${imgSource}/index_new/en/light_cone_ranks.json`,
            `${imgSource}/index_new/en/light_cones.json`
        ];
        const requests = requestURLs.map(URL => fetch(URL));
        Promise.all(requests)
            .then(responses => {
                return Promise.all(responses.map(resp => resp.json()));
            })
            .then(data => {
                const IDs = Object.keys(data[0]);
                const combinedData = IDs.map(ID => {
                    const params = data[0][ID].params[0]
                        .map(param => param < 1 ? param * 100 : param)
                        .map(param => Math.floor(param * 10) / 10);

                    let description = data[0][ID].desc;
                    description = description
                        .replace(/#\d\[(i|f\d)\]/g, rep => params[rep[1] - 1])
                        .replace(/\s1%/g, " 100%");

                    const path = data[1][ID].path;
                    return { ID, description, path };
                }).reverse();
                setLightConesData(combinedData);
            });
    }, []);

    function selectLightCone(event) {
        dispatch(changeLightCone({
            rowID,
            lightConeID: event.target.id
        }));
    }

    useEffect(() => {
        setLightConesIcons([]);
        [...lightConesData]
            .filter(el => el.path === rowPath)
            .forEach(el => {
                const ID = el.ID;
                const lightConeIcon = `${imgSource}/image/light_cone_preview/${ID}.png`;
                if (lightConeIcon) {
                    setLightConesIcons(prev => [
                        ...prev,
                        <img
                            key={ID}
                            id={ID}
                            src={lightConeIcon}
                            className="square"
                            onClick={selectLightCone}
                        ></img>
                    ])
                }
            })
    }, [lightConesData]);

    useEffect(() => {
        if(lightConesData.length) {
            setActiveLightCone(prev => {
                return {
                    ID: currentLightCone,
                    description: lightConesData.find(cone => cone.ID == currentLightCone).description
                }
            });
        }
    }, [lightConesData, currentLightCone]);

    return (
        <div className="modal-window lightcone-modal">
            <h2 className="lightcone-modal__title">Choose a Light Cone</h2>
            <div className="lightcone-modal__lightcones">
                {lightConesIcons}
            </div>
            <img className="lightcone-modal__selected-lightcone" src={`${imgSource}/image/light_cone_portrait/${activeLightCone.ID}.png`}></img>
            <p className="lightcone-modal__description">{activeLightCone.description}</p>
            <CloseButton />
        </div>
    )
};

export default LightCone;