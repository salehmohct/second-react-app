import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const TodosSlice = createSlice({
  name: "Todos",
  initialState: {
    isLoading: false,
    todos: [],
    singleTodo: {},
    error: null,
  },
  reducers: {
    setLoading: (state, action) => {
      // const { payload = false } = action; //هذي معناه لو ما مررت قيمة يخلي اللودنق بفولس قيمة افتراضية
      state.isLoading = action.payload;
    },
    getAlltoDos: (state, action) => {
      state.todos = action.payload;
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    createToDo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    UpdatToDo: (state, action) => {
      const foundedToDo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      if (foundedToDo) {
        foundedToDo.title = action.payload.title;
      }
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
export const {
  setLoading,
  getAlltoDos,
  deleteTodo,
  createToDo,
  UpdatToDo,
  setError,
} = TodosSlice.actions;
export const getAllData = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    //هيك حيطبع كل اشي const res =await axios.get("https://jsonplaceholder.typicode.com/todos");
    // لو بدي اخذ منه جزء الداتا فقط بعمله ديستركشرينق
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    if (data) {
      dispatch(getAlltoDos(data));
    }
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    // الثنتين صح لاني انا قيله ديفلت خلي السيت لودينق فولس لو ما في الها قيمة ما زبطت مش عارف ليش
    // dispatch(setLoading());
    dispatch(setLoading(false));
  }
};
export default TodosSlice.reducer;
