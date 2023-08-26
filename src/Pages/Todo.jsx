import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  //   getAlltoDos, لمن كنت اعمل الداتا لحالي
  deleteTodo,
  createToDo,
  UpdatToDo,
  getAllData,
} from "../Redux/Todos";
const Todo = () => {
  const { isLoading, todos, error } = useSelector((state) => state.todos);
  const [title, setTiltle] = useState("");
  const [title2, setTiltle2] = useState("");
  const dispatch = useDispatch();
  //   اوفلاين ديسباتش
  //   useEffect(() => {
  //     dispatch(
  //       getAlltoDos([
  //         {
  //           title: "toDo1",
  //           id: Math.round(Math.random() * 100),
  //         },
  //         {
  //           title: "toDo2",
  //           id: Math.round(Math.random() * 100),
  //         },
  //         {
  //           title: "toDo2",
  //           id: Math.round(Math.random() * 100),
  //         },
  //       ])
  //     );
  //   }, [dispatch]);
  useEffect(() => {
    dispatch(getAllData());
  }, [dispatch]);

  const handledeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createToDo({ title, id: Math.round(Math.random() * 100) }));
    setTiltle("");
  };
  const handleUpdateToDo = (id) => {
    dispatch(UpdatToDo({ title: title2, id: id }));
    setTiltle2("");
  };
  return (
    <div>
      {isLoading ? <h1>....loading</h1> : ""}
      {error}
      {todos.length ? (
        todos.map((todo) => (
          <div key={todo.id}>
            {todo.title}{" "}
            <button onClick={() => handledeleteTodo(todo.id)}>delete</button>{" "}
            <input
              type="text"
              placeholder="New Title of to Do"
              onChange={(e) => setTiltle2(e.target.value)}
            />
            <button onClick={() => handleUpdateToDo(todo.id)}>
              UpdateToDo
            </button>
          </div>
        ))
      ) : (
        <h1>No to do found</h1>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="addtodo"
          placeholder="add to Do"
          onChange={(e) => setTiltle(e.target.value)}
          value={title}
        />
        <button type="submit">CreateTodo</button>
      </form>
    </div>
  );
};

export default Todo;
