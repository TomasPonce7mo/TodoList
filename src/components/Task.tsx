import { useEffect, useState } from "react";
import { Circle } from "./Circle";
import { Task } from "../interface/interface";
import { useTodos } from "../hooks/useTodos";

export interface Props {
  task: Task
}

export const TaskItem = (props: Props) => {

  const { toggleTodo, deleteTask } = useTodos()

  const [status, setstatus] = useState({
    color: "red",
    text: "Pending"
  })

  useEffect(() => {
    if (props.task.completed) {
      setstatus({
        color: "green",
        text: "Completed"
      })
    }
    else {
      setstatus({
        color: "red",
        text: "Pending"
      })
    }
  }, [props.task.completed])

  return (
    <>
      <button className="task" onClick={() => toggleTodo(props.task.id)} onDoubleClick={() => deleteTask(props.task)}>
      
        <div className="taskprop">
          <h2>{props.task.title}</h2>
          <p className="text">{props.task.desc}</p>
        </div>
        <div><Circle width="20" height="14" cx="10" cy="8" r="5" fill={status.color} /><span>{status.text}</span></div>
        
      </button>
    </>
  )
}
