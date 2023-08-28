import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CreatePostMethod } from "../Redux/posts";
import { Link } from "react-router-dom";
const CreatePost = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submited");
  };
  const dispatch = useDispatch();
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="PostId">PostId: </label>
        <input
          type="text"
          id="PostId"
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
        ></input>
        <br />
        <label htmlFor="Posttitle">Post title: </label>
        <input
          type="text"
          id="Posttitle"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></input>
        <br />
        <label htmlFor="Postbody">Post body: </label>
        <input
          type="text"
          id="Postbody"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></input>
        <br />
        <Link
          to="/"
          type="submit"
          onClick={() => dispatch(CreatePostMethod({ id, title, body }))}
        >
          {/* الاي دي لا نقوم بتمريره لانه يتم توليده في الباك اند */}
          Create
        </Link>
      </form>
    </div>
  );
};

export default CreatePost;
