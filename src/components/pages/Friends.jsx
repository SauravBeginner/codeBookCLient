import React from "react";

const Friends = ({ user }) => {
  return (
    <>
      <div className="globalProfile">
        <div
          className="globalRoundProfile r-10"
          style={{ backgroundImage: `url(../${user.profilePicture})` }}
        ></div>
        <div className="name">{user.username}</div>
      </div>
    </>
  );
};

export default Friends;
