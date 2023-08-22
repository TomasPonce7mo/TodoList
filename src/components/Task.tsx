import { useEffect, useState } from "react";
import { Circle } from "./Circle";

export interface Props {
    title: string,
    desc: string,
    completed: boolean  
}

export const Task = ( props:Props ) => {
  const [status, setstatus] = useState({
    color: "red",
    text: "Pending"
  })
  useEffect(() => {
    if(props.completed){
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
  }, [props.completed])
  
  
  return (
    <>
    <div className="task">
      <div>
    <h2>{props.title}</h2>
    <p>{props.desc}</p>
    </div>
    <div className="textalignright"><Circle width="20" height="14" cx="10" cy="8" r="5" fill={status.color} /><span>{status.text}</span></div>
    </div>
    </>
  )
}
