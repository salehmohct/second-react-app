import React from "react";
// import { increment, decrement, incrementByAmount } from "./Redux/counter";
// import { useSelector, useDispatch } from "react-redux";
// import Todo from "./Pages/Todo";
import Post from "./Pages/Post";
import PostComment from "./Pages/PostComment";
import SinglePost from "./Pages/SinglePost";
import { Routes, Route } from "react-router-dom";
import CreatePost from "./Pages/CreatePost";
import EditPost from "./Pages/EditPost";
import FiltringPostPage from "./Pages/FiltringPost";
function App() {
  // const counter = useSelector((state) => state.counter);
  // const dispatch = useDispatch();
  return (
    <div className="App">
      {/* <h1>
        counter <span>{counter.value}</span>{" "}
      </h1>
      <button onClick={() => dispatch(increment())}>++</button>
      <button onClick={() => dispatch(decrement())}>- -</button>
      <button onClick={() => dispatch(incrementByAmount(2))}>+2</button> */}
      {/* <Todo /> */}
      <Routes>
        <Route path="/" element={<Post />}></Route>
        <Route path="SinglePost" element={<SinglePost />}></Route>
        <Route path="PostComment" element={<PostComment />}></Route>
        <Route path="CreatePost" element={<CreatePost />}></Route>
        <Route path="EditPost" element={<EditPost />}></Route>
        <Route path="FiltreingPost" element={<FiltringPostPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
