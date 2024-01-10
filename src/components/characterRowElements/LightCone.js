import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { switchModalState } from "../../features/modalSlice";
import { changeModal } from "../../features/modalSlice";

const LightCone = ({ rowID }) => {
  const characterData = useSelector((state) => state.rowsData[rowID]);
  const imgSource = useSelector((state) => state.imgSource.link);
  const lightConeIcon = `${imgSource}/image/light_cone_preview/${characterData.lightConeID}.png`;
  const lightConeLvl = useSelector((state) => state.rowsData[rowID].lightConeLvl);

  const dispatch = useDispatch();

  function showModal() {
    dispatch(switchModalState());
    dispatch(changeModal({ rowID, type: "LightCone" }));
  }

  const styles = {
    height: `${70 - lightConeLvl / 80 * 70}px`
  };

  return (
    <div>
      <div className="square square-shadow" style={styles} onClick={showModal}></div>
      <img src={lightConeIcon} className="square" onClick={showModal}></img>
    </div>
  )
};

export default LightCone;