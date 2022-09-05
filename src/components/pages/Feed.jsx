import React, { useEffect, useState } from "react";
import CreatePost from "./CreatePost";
import Post from "./Post";

import Story from "./Story";
//import { Posts } from "../../dummyData";

const Feed = () => {
  const [posts, setPosts] = useState([]);

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
    getPost();
  }, []);
  return (
    <>
      <div class="sectionCenter">
        <Story />
        <CreatePost />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </>
  );
};

export default Feed;
