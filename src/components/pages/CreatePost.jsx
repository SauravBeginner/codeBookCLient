import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CreatePost = () => {
  const { userId } = useParams();
  const [user, setUser] = useState("");
  const [cuser, setCuser] = useState("");
  console.log("userId", userId);
  const getUser = async () => {
    const token = localStorage.getItem("jtoken");
    if (token) {
      var resp = await fetch(
        `https://codebookserver.herokuapp.com/user/findone/${userId}`,
        {
          headers: {
            Token: "Bearer " + token,
          },
        }
      );

      var data = await resp.json();
      console.log((data.msg = "You can only Post from your account"));
      if (!data.err) {
        setUser(data);
      } else {
        setUser("");
      }
    } else {
      setUser("");
    }
  };
  const getCurrentUser = async () => {
    const token = localStorage.getItem("jtoken");
    if (token) {
      var resp = await fetch(
        "https://codebookserver.herokuapp.com/user/finduser",
        {
          headers: {
            Token: "Bearer " + token,
          },
        }
      );

      var data = await resp.json();
      //console.log(data);

      setCuser(data);
    } else {
      setCuser("");
    }
  };

  useEffect(() => {
    if (userId) {
      getUser();
      getCurrentUser();
    }
  }, [userId]);
  return (
    <>
      {user && (
        <div className="createPost">
          <div className="input">
            <div
              className="globalRoundProfile"
              style={{
                backgroundImage: `url(${
                  cuser.profilePicture || "../assets/person/noAvatar.png"
                } )`,
              }}
            >
              <span></span>
            </div>
            <textarea
              placeholder="What's in your mind Safak?"
              className="post"
            />
          </div>

          <div className="buttons">
            <span>
              <div className="svg">
                <img src="../svg/live_video.svg" alt="" />
              </div>
              <h4>Live Video</h4>
            </span>
            <span>
              <div className="svg">
                <img src="../svg/photo.svg" alt="" />
              </div>
              <h4>Photo/Video</h4>
            </span>
            <span>
              <div className="svg">
                <img src="../svg/smile.svg" alt="" />
              </div>
              <h4>Feeling/Activity</h4>
            </span>
            <span>
              <div className="svg">
                <i className="fa fa-paper-plane " aria-hidden="true"></i>
              </div>
              <h4>Share</h4>
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default CreatePost;
