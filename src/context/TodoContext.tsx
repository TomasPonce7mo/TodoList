import { createContext } from "react";
import { Filter, Task, TaskList } from "../interface/interface";

export type TodoContextProps = {
    taskList: TaskList,
    toggleTodo: ( id: number ) => void,
    addTask: ( newTask: Task ) => void,
    deleteTask: ( newTask: Task ) => void,
    filter: ( newFilter: Filter ) => void
}

export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps)