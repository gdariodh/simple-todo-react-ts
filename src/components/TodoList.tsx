import { TodoItem } from "./TodoItem";
// custom hook about TodoContext
import { useTodos } from "../hooks/useTodos";

export const TodoList = () => {
  const { todos } = useTodos();

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
