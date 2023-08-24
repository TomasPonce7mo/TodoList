import { useState } from "react";
import { useTodos } from "../hooks/useTodos";
import { Task } from "../interface/interface";




export const TaskForm = () => {

  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")

  const { addTask } = useTodos();
  const [idcount, setidcount] = useState(0)




  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (title === "" || desc === "") {
      alert("Campos vacios")
    }
    else {
      const newTask: Task = {
        id: idcount,
        title: title,
        desc: desc,
        completed: false
      }
      addTask(newTask)
      settitle("")
      setdesc("")
      setidcount(idcount +1)
    }
  }

  return (
    <form id="taskform" className="taskform" onSubmit={e => handleSubmit(e)}>
      <h2 className="bottomline">Add a new task</h2>
      <input name="title" type="text" placeholder="Title" value={title} onChange={e => settitle(e.target.value)}></input> <br />
      <textarea name="desc" placeholder="Description" value={desc} onChange={e => setdesc(e.target.value)}></textarea> <br />
      <button className="button" type="submit">Add</button>
    </form>
  )
}

