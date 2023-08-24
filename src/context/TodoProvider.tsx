import { useReducer } from "react";
import { TaskList, Task, Filter } from "../interface/interface";
import { TodoContext } from "./TodoContext";
import { todoReducer } from "./TodoReducer";

interface props {
    children: JSX.Element | JSX.Element[]
}

const INITIAL_STATE: TaskList = {
  tasks: [],
  filter: {
    type: 'default',
    value: ""
  }
}

export const TodoProvider = ({ children }: props) => {

  const [ taskList, dispatch] = useReducer( todoReducer, INITIAL_STATE );
  const toggleTodo = ( id: number ) => {
    dispatch({ type: 'toggleTodo', payload: { id } })
}
  const addTask = ( newTask: Task ) => {
    dispatch({ type: 'addTask', payload: newTask })
}
const deleteTask = ( newTask: Task ) => {
  dispatch({ type: 'deleteTask', payload: newTask })
}
const filter = ( newFilter: Filter) => {
  dispatch({ type: 'filter', payload:newFilter })
}

  return (
    <TodoContext.Provider value={{
      addTask,
      taskList,
      toggleTodo,
      deleteTask,
      filter
    }}>
        { children }
    </TodoContext.Provider>
  )
}
