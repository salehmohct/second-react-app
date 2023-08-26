import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const PostsSlice = createSlice({
  name: "Posts",
  initialState: {
    id: "",
    error: null,
    posts: [],
    getSinglePost: [],
    isloading: false,
    PostComment: [],
    filterPost: [],
  },
  reducers: {
    getId: (state, action) => {
      state.id = action.payload;
    },
    getPosts: (state, action) => {
      state.posts = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    getSinglePostAction: (state, action) => {
      state.getSinglePost = action.payload;
    },
    DeletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    GitPostComment: (state, action) => {
      state.PostComment = action.payload;
    },
    CreatePostAction: (state, action) => {
      state.posts = [...state.posts, action.payload];
    },
    EditPostAction: (state, action) => {
      state.posts = [action.payload]; //هذا خطا بس علشان نشوف عملية الابديت
    },
    FiltringPostAction: (state, action) => {
      state.filterPost = action.payload;
    },
  },
});
export const {
  getId,
  getPosts,
  setError,
  getSinglePostAction,
  DeletePost,
  GitPostComment,
  CreatePostAction,
  EditPostAction,
  FiltringPostAction,
} = PostsSlice.actions;
export const getAllPost = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    if (data) {
      dispatch(getPosts(data));
    }
  } catch (error) {
    dispatch(setError(error.message));
  }
};
export const getPost = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    if (data) {
      dispatch(getSinglePostAction(data));
    }
  } catch (error) {
    dispatch(setError(error.message));
  }
};
export const getComment = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    if (data) {
      dispatch(GitPostComment(data));
    }
  } catch (error) {
    dispatch(setError(error.message));
  }
};
export const CreatePostMethod =
  ({ id, title, body }) =>
  async (dispatch) => {
    await axios
      .post(`https://jsonplaceholder.typicode.com/posts`, {
        id: id,
        title: title,
        body: body,
      })
      .then((response) => {
        dispatch(CreatePostAction(response.data));
      });
  };
//عملية الايديت ما بتصير ع السيرفر الرئيسي علشان هيك لمن ارجع اجيب البيانات بيرجعها من دون تحديث للبيانات علشان هيك لو بدي اتاكد انه عمله ايديت بس بدي ارجع البوست الي انعملها ايديت فقط
export const EditPostMethod =
  ({ id, title, body }) =>
  async (dispatch) => {
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        title: title,
        body: body,
      })
      .then((response) => {
        dispatch(EditPostAction(response.data));
      });
  };

export const FiltringPost = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );
    if (data) {
      dispatch(FiltringPostAction(data));
    }
  } catch (error) {
    dispatch(setError(error.message));
  }
};
export default PostsSlice.reducer;
