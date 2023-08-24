import { TaskItem } from "./Task"
import { useTodos } from "../hooks/useTodos"
import { useState } from "react";



export const TaskList = () => {

  const { tasks } = useTodos();
  const [filteredTasks, setfilteredTasks] = useState(tasks)
  
  return (
    
    <div className="tasklist">
      {
        tasks.map(task => <TaskItem key={task.id}  task={task} />)
      }
    </div>
  )
}

