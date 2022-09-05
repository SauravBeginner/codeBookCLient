import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import { Users } from "../../dummyData";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.likes.length);
  const [isliked, setIstLiked] = useState(false);
  const [user, setUser] = useState({});

  const getUser = async () => {
    const token = localStorage.getItem("jtoken");
    if (token) {
      const resp = await fetch(
        `https://codebookserver.herokuapp.com/user/find/${post.userId}`,
        {
          headers: {
            Token: "Bearer " + token,
          },
        }
      );

      var data = await resp.json();
      // console.log(data);
      setUser(data);
    }
  };

  useEffect(() => {
    getUser();
  }, [post.userId]);

  const likeHandler = () => {
    setLike(isliked ? like - 1 : like + 1);
    setIstLiked(!isliked);
  };
  return (
    <>
      <div className="my_post">
        <div className="mainPosts">
          <div className="title">
            <Link
              to={`/profile/${post.userId}`}
              style={{ textDecoration: "none" }}
            >
              <div className="profile">
                <div
                  class="globalRoundProfile"
                  style={{
                    backgroundImage: `url(${
                      user.profilePicture
                        ? user.profilePicture
                        : "../assets/person/noAvatar.png"
                    })`,
                  }}
                >
                  <span></span>
                </div>

                <div className="name">
                  <h6>{user.username}</h6>
                  <span>
                    1 min <i className="fas fa-globe-americas"></i>
                  </span>
                </div>
              </div>
            </Link>
            <i className="fas fa-ellipsis-h"></i>
          </div>

          <div className="description">{post.desc}</div>

          <img className="post" src={post.img} alt="" />

          <div className="reaction">
            <div className="icons">
              <div className="svg">
                <img src="../svg/like.svg" alt="" />
              </div>
              <div className="svg">
                <img src="../svg/heart.svg" alt="" />
              </div>
              <div className="svg">
                <img src="../svg/care.svg" alt="" />
              </div>
              <a href="#">{like}</a>
              <a href="#">{/*post.comment*/} Comments</a>
            </div>
          </div>

          <div className="likeShare">
            <span onClick={likeHandler}>
              <div className="svg">
                <img src="../svg/like_light.svg" alt="" />
              </div>
              <h3>Like</h3>
            </span>
            <span>
              <div className="svg">
                <img src="../svg/comment.svg" alt="" />
              </div>
              <h3>Comment</h3>
            </span>
            <span>
              <div className="svg">
                <img src="../svg/share.svg" alt="" />
              </div>
              <h3>Share</h3>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
