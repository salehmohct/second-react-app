import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPost,
  getPost,
  DeletePost,
  getComment,
  getId,
  DeleteFromServer,
} from "../Redux/posts";
import { Link } from "react-router-dom";

const Post = () => {
  const { posts, error } = useSelector((state) => state.Posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPost());
  }, [dispatch]);
  return (
    <>
      {error}
      <Link to="CreatePost">Create Post</Link>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>
            <span>{post.id} </span>
            {post.title}
          </h3>
          <p>{post.body}</p>
          <Link to="EditPost" onClick={() => dispatch(getId(post.id))}>
            Edit post
          </Link>
          <Link to="SinglePost" onClick={() => dispatch(getPost(post.id))}>
            View Post
          </Link>
          <Link to="PostComment" onClick={() => dispatch(getComment(post.id))}>
            Post Comment
          </Link>
          <button onClick={() => dispatch(DeletePost(post.id))}>
            Delete Post
          </button>
          <button onClick={() => dispatch(DeleteFromServer(post.id))}>
            Delete From Server
          </button>
          <Link to="FiltreingPost" onClick={() => dispatch(getId(post.id))}>
            Filtring Post
          </Link>
        </div>
      ))}
    </>
  );
};

export default Post;
