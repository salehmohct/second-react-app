import React from "react";
import { useSelector } from "react-redux";
const PostComment = () => {
  const { PostComment } = useSelector((state) => state.Posts);

  return (
    <div>
      {PostComment.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <br />
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostComment;
