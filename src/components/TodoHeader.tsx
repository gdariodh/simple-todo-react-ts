// custom hook about TodoContext
import { useTodos } from "../hooks/useTodos";

export const TodoHeader = () => {
  const { pendingTodos } = useTodos();

  return (
    <div>
      <h1>Todo - pendientes: {pendingTodos}</h1>
    </div>
  );
};
