import { useState } from 'react'
import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'
import { form } from './types/types'

function App() {

  const [formulario, setFormulario] = useState({} as form)

  return (
    <>
    <div className='textaligncenter'>
      <h1 className='bottomline'>To-do List</h1>
      </div>
      <TaskList formulario={formulario} setFormulario={setFormulario} />
      <TaskForm formulario={formulario} setFormulario={setFormulario} />
      <br/> <br/> <br/> <br/> <br/>
    </>
  )
}

export default App
