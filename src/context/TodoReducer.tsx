import { Filter, Task, TaskList } from "../interface/interface";


type TodoAction = 
    | { type: 'addTask', payload: Task }
    | { type: 'deleteTask', payload: Task }
    | { type: 'toggleTodo', payload: { id: number } }
    | { type: 'filter', payload: Filter }


export const todoReducer = ( state: TaskList, action: TodoAction ): TaskList => {

    switch ( action.type ) {
        case 'addTask':
            return {
                ...state,
                tasks: [ ...state.tasks, action.payload ]
            }

        case 'toggleTodo': 
            return {
                ...state,
                tasks: state.tasks.map( ({ ...Task }) => {
                    if( Task.id === action.payload.id ) {
                        Task.completed = !Task.completed;
                    }
                    return Task;
                })
            }
        case 'deleteTask': 
            return  {
                ...state,
                tasks: state.tasks.filter(tasks => tasks.id !== action.payload.id)
            }
        case 'filter':
            return {
                ...state,
                filter: action.payload
            }
  
        default:
            return state;
    }

}