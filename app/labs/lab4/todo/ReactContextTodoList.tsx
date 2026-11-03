import { useState } from "react";
import { useTodosContext, type Todo } from "./todosContext";

const emptyTodo: Todo = { id: "", title: "" };

export default function ReactContextTodoList() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodosContext();

  const [draft, setDraft] = useState<Todo>(emptyTodo);
  const add = () => {
    addTodo(draft.title);
    setDraft(emptyTodo);
  };

  const update = () => {
    updateTodo(draft);
    setDraft(emptyTodo);
  };
  return (
    <div id="wd-context-todo-list">
      <h3>React Context Todo List</h3>
      <div className="mb-3 flex gap-2">
        <input
          value={draft.title}
          onChange={(e) => setDraft({ ...draft, title: e.target.value })}
          id="wd-context-todo-title"
          className="rounded border border-neutral-300 px-3 py-1.5"
        />
        <button
          type="button"
          onClick={add}
          id="wd-context-add-todo-click"
          className="rounded bg-green-600 px-3 py-1.5 text-sm text-white"
        >
          Add
        </button>

        <button
          type="button"
          onClick={update}
          id="wd-context-update-todo-click"
          className="rounded bg-yellow-400 px-3 py-1.5 text-sm text-white"
        >
          Update
        </button>
      </div>
      <ul className="m-0 max-w-lg list-none p-0">
        {todos.map((todo) => (
          <li
            key={todo.id}
            id={`wd-context-todo-${todo.id}`}
            className="mb-1 flex justify-between rounded border border-neutral-300 px-3 py-1"
          >
            <span>{todo.title}</span>
            <span className="flex gap-2">
              <button
                type="button"
                onClick={() => setDraft(todo)}
                className="rounded bg-yellow-400 px-2 py-0.5 text-sm"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => deleteTodo(todo.id)}
                className="rounded bg-red-400 px-2 py-0.5 text-sm"
              >
                Delete
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
