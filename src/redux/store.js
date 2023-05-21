import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todos/todosSlice";
import userReducer from "./user/userSlice";

const store = configureStore({
  reducer: {
    todos: todosReducer,
    user: userReducer,
  },
});

export default store;
