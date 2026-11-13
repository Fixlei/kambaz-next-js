"use client";
import { useState } from "react";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function WorkingWithRemoteArrays() {
  const API = `${HTTP_SERVER}/lab5/todos`;

  const [todo, setTodo] = useState({
    id: "1",
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    completed: false,
  });

  return (
    <div id="wd-working-with-remote-arrays">
      <h3>Working with Arrays</h3>

      {/* 5.2.4.1 Retrieving Arrays from a Server */}
      <h4>Retrieving Arrays</h4>
      <a
        id="wd-retrieve-todos"
        className="inline-block rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        href={API}
      >
        Get Todos
      </a>

      {/* 5.2.4.2 Retrieving Data From a Server by Primary Key */}
      <h4>Retrieving an Item from an Array by ID</h4>
      <div className="mb-2 flex items-center gap-2">
        <a
          id="wd-retrieve-todo-by-id"
          className="inline-block rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
          href={`${API}/${todo.id}`}
        >
          Get Todo by ID
        </a>
        <input
          id="wd-todo-id"
          className="rounded border border-neutral-300 px-3 py-1.5"
          value={todo.id}
          onChange={(e) => setTodo({ ...todo, id: e.target.value })}
        />
      </div>

      {/* 5.2.4.3 Filtering Data From a Server With a Query String */}
      <h4>Filtering Array Items</h4>
      <a
        id="wd-retrieve-completed-todos"
        className="inline-block rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        href={`${API}?completed=true`}
      >
        Get Completed Todos
      </a>

      {/* 5.2.4.4 Creating New Data in a Server */}
      <h4>Creating new Items in an Array</h4>
      <a
        id="wd-create-todo"
        className="inline-block rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        href={`${API}/create`}
      >
        Create Todo
      </a>

      {/* 5.2.4.5 Deleting Data from a Server — uses the ID typed in 5.2.4.2 */}
      <h4>Removing from an Array</h4>
      <a
        id="wd-remove-todo"
        className="inline-block rounded bg-red-600 px-3 py-1.5 text-sm text-white"
        href={`${API}/${todo.id}/delete`}
      >
        Remove Todo with ID = {todo.id}
      </a>

      {/* 5.2.4.6 Updating Data on a Server — one input for the ID, one for the new title */}
      <h4>Updating an Item in an Array</h4>
      <div className="mb-2 flex items-center gap-2">
        <a
          id="wd-update-todo-title"
          className="inline-block rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
          href={`${API}/${todo.id}/title/${todo.title}`}
        >
          Update Todo
        </a>
        <input
          className="w-20 rounded border border-neutral-300 px-3 py-1.5"
          value={todo.id}
          onChange={(e) => setTodo({ ...todo, id: e.target.value })}
        />
        <input
          className="rounded border border-neutral-300 px-3 py-1.5"
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        />
      </div>

      {/* 5.2.4.7 On Your Own — completed (checkbox) and description (text) */}
      <div className="mb-2 flex items-center gap-2">
        <a
          id="wd-update-todo-completed"
          className="inline-block rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
          href={`${API}/${todo.id}/completed/${todo.completed}`}
        >
          Complete Todo ID = {todo.id}
        </a>
        <input
          id="wd-todo-completed"
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
        />
      </div>
      <div className="mb-2 flex items-center gap-2">
        <a
          id="wd-update-todo-description"
          className="inline-block rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
          href={`${API}/${todo.id}/description/${todo.description}`}
        >
          Describe Todo ID = {todo.id}
        </a>
        <input
          id="wd-todo-description"
          className="rounded border border-neutral-300 px-3 py-1.5"
          value={todo.description}
          onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        />
      </div>

      <hr />
    </div>
  );
}
