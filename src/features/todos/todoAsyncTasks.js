import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncTodo = createAsyncThunk(
  "todo/addAsyncTodo",
  async () => {
    const res = await axios("https://dummyjson.com/todos/random");
    const data = await res.data;
    return { id: data.id, text: data.todo };
  }
);
