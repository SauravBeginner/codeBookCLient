import "./profile.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import Post from "./Post";
import CreatePost from "./CreatePost";
import SideBar from "./SideBar";
import { Posts } from "../../dummyData";
const Profile = () => {
  const { userId } = useParams();
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});
  const [cuser, setCuser] = useState({});
  const getPost = async () => {
    const token = localStorage.getItem("jtoken");
    if (token) {
      const resp = await fetch(`http://localhost:5000/post/profile/${userId}`, {
        headers: {
          Token: "Bearer " + token,
        },
      });

      var data = await resp.json();
      //console.log(data);
      setPosts(data);
    }
  };
  const getUser = async () => {
    const token = localStorage.getItem("jtoken");
    if (token) {
      var resp = await fetch(`http://localhost:5000/user/find/${userId}`, {
        headers: {
          Token: "Bearer " + token,
        },
      });

      var data = await resp.json();
      // console.log(data);
      setUser(data);
    } else {
      setUser("");
    }
  };

  useEffect(() => {
    getPost();
    getUser();
    // getCurrentUser();
  }, [userId]);
  return (
    <>
      <Navbar />
      <SideBar />
      <div className="profile">
        <div className="profileRight">
          <div className="profileRightTop sectionCenter">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={user.coverPicture || "../assets/person/noCover.png"}
                alt=""
              />
              <img
                className="profileUserImg"
                src={user.profilePicture || "../assets/person/noAvatar.png"}
                alt=""
              />
            </div>

            <div className="profileInfo" style={{ marginTop: "-15px" }}>
              <h4 className="profileInfoName">{user.username}</h4>
              <h6 className="profileInfoDesc">Hello my friends!</h6>
            </div>
          </div>
          <div className="profileRightBottom" style={{ marginTop: "-25px" }}>
            <div class="sectionCenter">
              <CreatePost />
              {posts.map((p) => (
                <Post key={p._id} post={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
