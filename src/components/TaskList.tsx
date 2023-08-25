import { TaskItem } from "./Task"
import { useTodos } from "../hooks/useTodos"
import { useEffect, useState } from "react";



export const TaskList = () => {

  const { tasks, taskList } = useTodos();
  
  const [currentPage, setcurrentPage] = useState(0)
  const [tasksByPage, settasksByPage] = useState(tasks.slice(currentPage, currentPage + 5))
  const [filteredTasks, setfilteredTasks] = useState(tasks)



  useEffect(() => {
    switch (taskList.filter.type) {
      case 'status':
        taskList.filter.value === 'completed'
          ? setfilteredTasks(tasks.filter(task => task.completed === true))
          : setfilteredTasks(tasks.filter(task => task.completed === false))
        break
      case 'default':
        setfilteredTasks(tasks)
        break
      case 'title':
       setfilteredTasks(tasks.filter(task => task.title.toUpperCase().includes(taskList.filter.value.toUpperCase())))
    }
  }, [taskList.filter])

  useEffect(() => {
    setfilteredTasks(tasks)
  }, [tasks])

  useEffect(() => {
    settasksByPage(filteredTasks.slice(currentPage, currentPage + 10))
  }, [filteredTasks, currentPage])

  
  const previousPage = () => {
    if (currentPage > 0) {
      setcurrentPage(currentPage - 10)
    }
  }
  const nextPage = () => {
    if (currentPage + 10 < tasks.length) {
      setcurrentPage(currentPage + 10)
  }
  }

  return (
    <>
      <div className="container">
      
      
      <div className="tasklist">
      <div className="containerbuttons">
      <button className="button" onClick={previousPage}>Previous page</button> 
      <p>Tasks {currentPage} - {currentPage + tasksByPage.length}</p>
      <button className="button" onClick={nextPage}>Next page</button>
      </div>
        {
          tasksByPage.map(task => <TaskItem key={task.id} task={task} />)
        }
      </div>
      
      </div>
    </>
  )
}


