import React from "react";

const Online = ({ user }) => {
  return (
    <>
      <div className="globalProfile">
        <div
          className="globalRoundProfile"
          style={{
            backgroundImage: `url(../${user.profilePicture})`,
          }}
        >
          <div className="active"></div>
        </div>

        <div className="name">{user.username}</div>
      </div>
    </>
  );
};

export default Online;
