import React, { useState, useEffect } from "react";
//import { Users } from "../../dummyData";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [like, setLike] = useState(posts.likes);
  const [isliked, setIstLiked] = useState(false);
  const [user, setUser] = useState({});

  const getUser = async () => {
    const token = localStorage.getItem("jtoken");
    if (token) {
      const resp = await fetch(`http://localhost:5000/user/finduser`, {
        headers: {
          Token: "Bearer " + token,
        },
      });

      var data = await resp.json();
      console.log(data);
      setUser(data);
    }
  };

  const getPost = async () => {
    const token = localStorage.getItem("jtoken");
    if (token) {
      const resp = await fetch(`http://localhost:5000/post/timeline/all`, {
        headers: {
          Token: "Bearer " + token,
        },
      });

      var data = await resp.json();
      console.log(data);
      setPosts(data);
    }
  };

  useEffect(() => {
    getUser();
    getPost();
  }, []);

  const likeHandler = () => {
    setLike(isliked ? like - 1 : like + 1);
    setIstLiked(!isliked);
  };
  return (
    <>
      <div className="my_post">
        <div className="mainPosts">
          {posts.map((post) => (
            <div key={post._id}>
              <div className="title">
                <div className="profile">
                  <div
                    class="globalRoundProfile"
                    style={{
                      backgroundImage: `url(${user.profilePicture})`,
                    }}
                  >
                    <span></span>
                  </div>

                  <div className="name">
                    <a href="#">{user.username}</a>
                    <span>
                      {/*post.date*/} <i className="fas fa-globe-americas"></i>
                    </span>
                  </div>
                </div>

                <i className="fas fa-ellipsis-h"></i>
              </div>

              <div className="description">{post.desc}</div>

              <img className="post" src={post.img} />

              <div className="reaction">
                <div className="icons">
                  <div className="svg">
                    <img src="./svg/like.svg" alt="" />
                  </div>
                  <div className="svg">
                    <img src="./svg/heart.svg" alt="" />
                  </div>
                  <div className="svg">
                    <img src="./svg/care.svg" alt="" />
                  </div>
                  <a href="#">{like}</a>
                  <a href="#">{/*post.comment*/} Comments</a>
                </div>
              </div>
            </div>
          ))}
          <div className="likeShare">
            <span onClick={likeHandler}>
              <div className="svg">
                <img src="./svg/like_light.svg" alt="" />
              </div>
              <h3>Like</h3>
            </span>
            <span>
              <div className="svg">
                <img src="./svg/comment.svg" alt="" />
              </div>
              <h3>Comment</h3>
            </span>
            <span>
              <div className="svg">
                <img src="./svg/share.svg" alt="" />
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
