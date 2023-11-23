import React from "react";
import { useSelector, useDispatch } from "react-redux";

const LightCone = ({rowID}) => {
  const characterData = useSelector((state) => state.rowsData[rowID]);
  const imgSource = useSelector((state) => state.imgSource.link);
  const lightConeIcon = `${imgSource}/image/light_cone_preview/${characterData.lightConeID}.png`;

  return (
    <img src={lightConeIcon} className="square"></img>
  )
};

export default LightCone;