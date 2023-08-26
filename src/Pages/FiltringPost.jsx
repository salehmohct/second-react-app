import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiltringPost } from "../Redux/posts";
const FiltringPostPage = () => {
  const { filterPost, id } = useSelector((state) => state.Posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FiltringPost(id));
  }, [dispatch]);
  return (
    <div>
      <h1>Post No {id}</h1>
      {filterPost.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <br />
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default FiltringPostPage;
