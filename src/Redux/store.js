import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Counter";
import TodosSlice from "./Todos";
import PostsSlice from "./posts";
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    todos: TodosSlice,
    Posts: PostsSlice,
  },
});
