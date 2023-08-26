import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { EditPostMethod } from "../Redux/posts";

const EditPost = () => {
  const { id } = useSelector((state) => state.Posts);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
          onClick={() => {
            dispatch(EditPostMethod({ id, title, body }));
          }}
        >
          Edit
        </Link>
      </form>
    </div>
  );
};

export default EditPost;
