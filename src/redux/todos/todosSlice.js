import { createSlice, nanoid } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodoItem: (state, action) => {
      state.push({
        id: nanoid(),
        ...action.payload,
        createdAt: new Date().toISOString(),
      });
    },
    updateTodoItem: (state, action) => {
      return state.map((item) =>
        item.id === action.payload.id ? { ...item, ...action.payload } : item
      );
    },
  },
});

export const { addTodoItem, updateTodoItem } = todosSlice.actions;

export default todosSlice.reducer;
