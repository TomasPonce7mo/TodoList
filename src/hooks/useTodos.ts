import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';



export const useTodos = () => {

    const { taskList, toggleTodo, addTask, deleteTask, filter } = useContext( TodoContext );
    const { tasks } = taskList;

    return {
        taskList,
        tasks,
        addTask,
        toggleTodo,
        deleteTask,
        filter
    }
}