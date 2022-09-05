import React, { useState, useEffect } from "react";
// import { Users } from "../../dummyData";
import Friends from "./Friends";

const LeftSideBar = () => {
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
  }, [users]);

  return (
    <>
      <div className="sidebar left">
        <div className="container borderNone">
          <div className="globalProfile">
            <div
              className="globalRoundProfile"
              style={{ backgroundImage: "url(../img/profile.jpg)" }}
            ></div>
            <div className="name">FilipCodes YT</div>
          </div>
          <div className="globalProfile">
            <div
              className="globalRoundProfile"
              style={{ backgroundImage: "url(../ico/1.png)" }}
            ></div>
            <div className="name">COVID-19 info center</div>
          </div>
          <div className="globalProfile">
            <div
              className="globalRoundProfile"
              style={{ backgroundImage: "url(../ico/2.png)" }}
            ></div>
            <div className="name">Pages</div>
          </div>
          <div className="globalProfile">
            <div
              className="globalRoundProfile"
              style={{ backgroundImage: " url(../ico/3.png)" }}
            ></div>
            <div className="name">Friends</div>
          </div>
          <div className="globalProfile">
            <div
              className="globalRoundProfile"
              style={{ backgroundImage: "url(../ico/4.png)" }}
            ></div>
            <div className="name">Messenger</div>
          </div>
          <div className="globalProfile">
            <div className="globalRoundProfile circle">
              <i className="fas fa-angle-down"></i>
            </div>
            <div className="name">See More</div>
          </div>
        </div>
        <div className="container">
          <div className="mainTitle">
            <h3 className="padding">My Friends</h3>
            <a href="#">Edit</a>
          </div>

          {users?.map((u) => (
            <Friends key={u._id} user={u} />
          ))}

          <div className="globalProfile">
            <div className="globalRoundProfile circle">
              <i className="fas fa-angle-down"></i>
            </div>
            <div className="name">See More</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSideBar;
