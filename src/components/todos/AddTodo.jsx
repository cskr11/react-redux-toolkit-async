import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../features/todos/todoSlice";
import { fetchAsyncTodo } from "../../features/todos/todoAsyncTasks";

function AddTodo() {
  const [todoValue, setTodoValue] = useState("");
  const dispatch = useDispatch();

  const todoLoader = useSelector((state) => state.todo);

  const isLoading = todoLoader.isLoading;
  const error = todoLoader.error;

  const handleSetTodo = (e) => {
    e.preventDefault();
    setTodoValue(e.target.value);
  };

  const addTodohandler = (e) => {
    e.preventDefault();
    dispatch(addTodo({ text: todoValue }));
  };

  const addTodoAsynchandler = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncTodo());
  };

  return (
    <div>
      <div>{error}</div>
      <div>
        <input
          type="text"
          name="todo-item"
          id="todo-item"
          value={todoValue}
          onChange={handleSetTodo}
        />
        <button type="submit" onClick={addTodohandler}>
          Add Sync Todo
        </button>
      </div>
      <div>
        <button
          type="submit"
          onClick={addTodoAsynchandler}
          disabled={isLoading}
        >
          Network Request
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
