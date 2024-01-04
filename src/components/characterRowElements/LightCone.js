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

  return (
    <img src={lightConeIcon} className="square" onClick={showModal}></img>
  )
};

export default LightCone;