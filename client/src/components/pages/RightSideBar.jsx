import React, { useEffect, useState } from "react";
import { Users } from "../../dummyData";
import Online from "./Online";

const RightSideBar = () => {
  const [users, setUsers] = useState([]);

  const getUser = async () => {
    const token = localStorage.getItem("jtoken");
    if (token) {
      const resp = await fetch(`http://localhost:5000/user/friends`, {
        headers: {
          Token: "Bearer " + token,
        },
      });
      var data = await resp.json();
      setUsers(data);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div className="sidebar right">
        <div className="container borderNone">
          <div className="mainTitle">
            <h3 className="padding">Your Pages</h3>
            <i className="fas fa-ellipsis-h"></i>
          </div>

          <div className="globalProfile">
            <div
              className="globalRoundProfile"
              style={{ backgroundImage: "url(../img/profile.jpg)" }}
            ></div>
            <div className="name">My Page</div>
          </div>

          <div className="globalProfile globalProfileSmall">
            <div className="svg">
              <img src="../svg/bellLight.svg" alt="" />
            </div>
            <div className="name">25 Notifications</div>
          </div>

          <div className="globalProfile globalProfileSmall">
            <div className="svg">
              <img src="../svg/megaphone.svg" alt="" />
            </div>
            <div className="name">Create Promotion</div>
          </div>
        </div>

        <div className="container">
          <div className="mainTitle">
            <h3 className="padding">Contacts</h3>
            <div className="items icons">
              <i className="fas fa-video"></i>
              <i className="fas fa-search"></i>
              <i className="fas fa-ellipsis-h"></i>
            </div>
          </div>
          {users?.map((u) => (
            <Online key={u._id} user={u} />
          ))}
        </div>
      </div>
    </>
  );
};

export default RightSideBar;
