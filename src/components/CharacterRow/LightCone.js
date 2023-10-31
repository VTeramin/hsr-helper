import React from "react";

const LightCone = ({imgSource, lightConeID}) => {
  const lightConeIcon = `${imgSource}/image/light_cone_preview/${lightConeID}.png`;

  return (
    <img src={lightConeIcon} className="square"></img>
  )
};

export default LightCone;