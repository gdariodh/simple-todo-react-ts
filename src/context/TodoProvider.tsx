import { TodoContext } from "./TodoContext";
import { TodoState } from "../interfaces/interfaces";
import { useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState: TodoState = {
  todoCount: 2,
  todos: [
    { id: "1", desc: "Recolectar las piedras del infinito", completed: false },
    { id: "2", desc: "Recolectar las piedras del alma", completed: false },
  ],
  completed: 0,
  pending: 0,
};

interface props {
  children: JSX.Element | JSX.Element[];
}

export const TodoProvider = ({ children }: props) => {
      
    
  const [todoState, dispatch] = useReducer(todoReducer, initialState);

  // actions
const toggleTodo = (id: string) => {

  dispatch({
    type: 'toogleTodo',
    payload: {id} 
  })
}
  

  return (
  <TodoContext.Provider value={{
      todoState,
      // actions
      toggleTodo
    }}>
      {children}
  </TodoContext.Provider>);
};

// TodoProvider, TodoState is the same, i usually use TodoState
