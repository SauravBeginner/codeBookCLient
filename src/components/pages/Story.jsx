import React from "react";

const Story = () => {
  return (
    <>
      <div className="story">
        <div className="cover">
          <div className="create">
            <div className="svg">
              <img src="./svg/plusWhite.svg" alt="Create Story" />
            </div>
            <h3>
              Create a <br /> Story
            </h3>
          </div>
          <div
            className="bg"
            style={{ backgroundImage: "url(./img/profile_story.jpg)" }}
          >
            <span></span>
          </div>
        </div>

        <div className="cover">
          <div className="pro">
            <div
              className="globalRoundProfile"
              style={{ backgroundImage: "url(./img/3.jpg)" }}
            ></div>
          </div>
          <h3>FilipCodes YT</h3>
          <div className="bg" style={{ backgroundImage: "url(./img/8.jpg)" }}>
            <span></span>
          </div>
        </div>

        <div className="cover">
          <div className="pro">
            <div
              className="globalRoundProfile"
              style={{ backgroundImage: "url(./img/4.jpg)" }}
            ></div>
          </div>
          <h3>User Name</h3>
          <div className="bg" style={{ backgroundImage: "url(./img/9.jpg)" }}>
            <span></span>
          </div>
        </div>
        <div className="cover">
          <div className="pro">
            <div
              className="globalRoundProfile"
              style={{ backgroundImage: "url(./img/5.jpg)" }}
            ></div>
          </div>
          <h3>User Name</h3>
          <div className="bg" style={{ backgroundImage: "url(./img/10.jpg)" }}>
            <span></span>
          </div>
        </div>
        <div className="cover">
          <div className="pro">
            <div
              className="globalRoundProfile"
              style={{ backgroundImage: "url(./img/6.jpg)" }}
            ></div>
          </div>
          <h3>User Name</h3>
          <div className="bg" style={{ backgroundImage: " url(./img/11.jpg)" }}>
            <span></span>
          </div>
        </div>
        <div className="cover">
          <div className="pro">
            <div
              className="globalRoundProfile"
              style={{ backgroundImage: "url(./img/7.jpg)" }}
            ></div>
          </div>
          <h3>User Name</h3>
          <div className="bg" style={{ backgroundImage: " url(./img/12.jpg)" }}>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Story;
