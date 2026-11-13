"use client";
import { useState, useEffect } from "react";
import * as client from "./client";
import { isAxiosError } from "axios";
import { FaPlusCircle, FaTrash, FaPencilAlt } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";

export default function WorkingWithRemoteArraysAsync() {
  type Todo = {
    id: number;
    title: string;
    completed: boolean;
  };

  const [todos, setTodos] = useState<Todo[]>([]);
  const fetchTodos = async () => {
    setTodos(await client.fetchTodos());
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchTodos();
  }, []);

  const removeTodo = async (todo: Todo) => {
    setTodos(await client.removeTodo(todo));
  };

  const createNewTodo = async () => {
    setTodos(await client.createNewTodo());
  };

  const postNewTodo = async () => {
    const newTodo = await client.postNewTodo({
      title: "New Posted Todo",
      completed: false,
    });
    setTodos([...todos, newTodo]);
  };
  const editTodo = (todo: Todo) => {
    setTodos(
      todos.map((t) => (t.id === todo.id ? { ...todo, editing: true } : t)),
    );
  };

  const updateTodo = async (todo: Todo) => {
    try {
      await client.updateTodo(todo);
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
    } catch (error) {
      if (isAxiosError(error)) {
        setErrorMessage(error.response?.data.message);
      }
    }
  };

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const deleteTodo = async (todo: Todo) => {
    try {
      await client.deleteTodo(todo);
      setTodos(todos.filter((t) => t.id !== todo.id));
    } catch (error) {
      if (isAxiosError(error)) {
        setErrorMessage(error.response?.data.message);
      }
    }
  };

  return (
    <div id="wd-asynchronous-arrays">
      <h3>Working with Arrays Asynchronously</h3>
      {errorMessage && (
        <p
          id="wd-todo-error-message"
          className="rounded bg-red-100 px-3 py-2 text-red-800"
        >
          {errorMessage}
        </p>
      )}
      <h4>
        Todos
        <span>
          {"   "}
          <FaPlusCircle
            onClick={createNewTodo}
            id="wd-create-todo"
            className="cursor-pointer text-green-600"
          />
          {"   "}
          <FaPlusCircle
            onClick={postNewTodo}
            id="wd-post-todo"
            className="me-4 cursor-pointer text-blue-600"
          />
        </span>
      </h4>
      <ul id="wd-todos">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center gap-2">
            <span className={todo.completed ? "line-through" : ""}>
              {" "}
              {todo.title}
            </span>
            <FaTrash
              onClick={() => removeTodo(todo)}
              id="wd-remove-todo"
              className="me-4 cursor-pointer text-red-600"
            />

            <FaPencilAlt
              onClick={() => editTodo(todo)}
              className="cursor-pointer text-blue-600"
            />
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={(e) =>
                updateTodo({ ...todo, completed: e.target.checked })
              }
            />

            <TiDelete
              onClick={() => deleteTodo(todo)}
              id="wd-delete-todo"
              className="me-4 cursor-pointer text-2xl text-red-600"
            />
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
