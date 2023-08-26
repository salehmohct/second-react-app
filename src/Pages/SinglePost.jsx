import React from "react";
import { useSelector } from "react-redux";

const SinglePost = () => {
  const { getSinglePost } = useSelector((state) => state.Posts);

  return (
    <div>
      <div key={getSinglePost.id}>
        <h3>
          <span>{getSinglePost.id} </span>
          {getSinglePost.title}
        </h3>
        <p>{getSinglePost.body}</p>
      </div>
    </div>
  );
};

export default SinglePost;
