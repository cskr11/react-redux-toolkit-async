import { createSlice, nanoid } from "@reduxjs/toolkit";
import { fetchAsyncTodo } from "./todoAsyncTasks";

const initialState = {
  todos: [],
  isLoading: false,
  error: "",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload.text };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos.push(action.payload);
    });
    builder.addCase(fetchAsyncTodo.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchAsyncTodo.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
