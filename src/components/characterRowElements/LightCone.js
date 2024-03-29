import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { switchModalState } from "../../features/modalSlice";
import { changeModal } from "../../features/modalSlice";

const LightCone = ({ rowID }) => {
  const characterData = useSelector((state) => state.rowsData[rowID]);
  const imgSource = useSelector((state) => state.imgSource.link);
  const lightConeIcon = `${imgSource}/image/light_cone_preview/${characterData.lightConeID}.png`;
  const dispatch = useDispatch();

  function showModal() {
    dispatch(switchModalState());
    dispatch(changeModal({ rowID, type: "LightCone" }));
  }

  const style = {
    height: `${70 - characterData.lightConeLvl / 80 * 70}px`
  };

  return (
    <div>
      <div className="square square-shadow" style={style} onClick={showModal}></div>
      <img src={lightConeIcon} className="square" onClick={showModal}></img>
    </div>
  )
};

export default LightCone;