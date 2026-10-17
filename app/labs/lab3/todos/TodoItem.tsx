//In app/labs/lab3/todos, create TodoItem.tsx that receives one todo as a prop. 
//The todo = { … } in the parameter list is a default parameter (§3.4.15): 
//if the parent omits todo, the milk item is used.

type Todo = {
  done: boolean;
  title: string;
  status: string;
};

const TodoItem = ({
  todo = { done: true, title: "Buy milk", status: "COMPLETED" },
}: {
  todo?: Todo;
}) => {
  return (
    <li className="flex items-center gap-2 border-b py-1">
      <input type="checkbox" className="me-2" defaultChecked={todo.done} />
      {todo.title} ({todo.status})
    </li>
  );
};

export default TodoItem;