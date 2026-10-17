//Arrays, JSON, map, keys, default parameters, and parameterized
//components come together as a todo list — still throwaway
//Lab 3 code, now combining the ideas instead of introducing a new one.

import TodoItem from "./TodoItem";
import todos from "./todos.json";

export default function TodoList() {
  // With AI: log the todos array to the console
  console.log(todos);
  return (
    <>
      <h3>Todo List</h3>
      <ul className="list-none p-0">
        {todos.map((todo) => (
          <TodoItem key={todo.title} todo={todo} />
        ))}
      </ul>
      <hr />
    </>
  );
}
