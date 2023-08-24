import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';



export const useTodos = () => {

    const { taskList, toggleTodo, addTask, deleteTask } = useContext( TodoContext );
    const { tasks, filter } = taskList;

    return {
        tasks,
        addTask,
        toggleTodo,
        deleteTask,
        filter
    }
}