import React from "react";

const Rooms = () => {
  return (
    <>
      <div className="rooms">
        <div className="title">
          <div className="left">
            <i className="fas fa-video"></i>
            <h3>Rooms</h3>
            <p>Video chat with friends</p>
            <i className="fas fa-exclamation-circle"></i>
          </div>
          <div className="right">
            <a href="#">Create Room</a>
          </div>
        </div>
        <div className="profiles">
          <div
            className="globalRoundProfile"
            style={{ backgroundImage: "url(./img/1.jpg)" }}
          >
            <div className="svg">
              <img src="./svg/plusWhite.svg" alt="" />
            </div>
            <span></span>
            <div className="darkSpan"></div>
          </div>
          <div
            className="globalRoundProfile"
            style={{ backgroundImage: "url(./img/1.jpg)" }}
          >
            <span></span>
            <div className="active"></div>
          </div>
          <div
            className="globalRoundProfile"
            style={{ backgroundImage: "url(./img/2.jpg)" }}
          >
            <span></span>
            <div className="active"></div>
          </div>
          <div
            className="globalRoundProfile"
            style={{ backgroundImage: "url(./img/3.jpg)" }}
          >
            <span></span>
            <div className="active"></div>
          </div>
          <div
            className="globalRoundProfile"
            style={{ backgroundImage: "url(./img/4.jpg)" }}
          >
            <span></span>
            <div className="active"></div>
          </div>
          <div
            className="globalRoundProfile"
            style={{ backgroundImage: "url(./img/5.jpg)" }}
          >
            <span></span>
            <div className="active"></div>
          </div>
          <div
            className="globalRoundProfile"
            style={{ backgroundImage: "url(./img/6.jpg)" }}
          >
            <span></span>
            <div className="active"></div>
          </div>
          <div
            className="globalRoundProfile"
            style={{ backgroundImage: "url(./img/7.jpg)" }}
          >
            <span></span>
            <div className="active"></div>
          </div>
          <div
            className="globalRoundProfile"
            style={{ backgroundImage: "url(./img/8.jpg)" }}
          >
            <span></span>
            <div className="active"></div>
          </div>
          <div
            className="globalRoundProfile"
            style={{ backgroundImage: "url(./img/9.jpg)" }}
          >
            <span></span>
            <div className="active"></div>
          </div>
          <div
            className="globalRoundProfile"
            style={{ backgroundImage: "url(./img/10.jpg)" }}
          >
            <span></span>
            <div className="active"></div>
          </div>
          <div
            className="globalRoundProfile"
            style={{ backgroundImage: "url(./img/11.jpg)" }}
          >
            <span></span>
            <div className="active"></div>
          </div>
          <div
            className="globalRoundProfile"
            style={{ backgroundImage: "url(./img/12.jpg)" }}
          >
            <span></span>
            <div className="active"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rooms;
