import React from "react";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";

const SideBar = () => {
  return (
    <>
      <div className="sideBarContainer">
        <LeftSideBar />
        <RightSideBar />
      </div>
    </>
  );
};

export default SideBar;
