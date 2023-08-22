import { useEffect, useState } from "react"
import { Task } from "./Task"
import { form } from "../types/types"



interface Props {
  formulario: form,
  setFormulario: any
}



export const TaskList = ( props:Props ) => {
  
  const [formulariomap, setFormulario] = useState([{} as form])
  useEffect(() => {
    setFormulario([{
      title: "",
      desc: ""
    }])
  }, [])
  
  useEffect(() => {
    formulariomap.push(props.formulario)
    console.log("loop")
  }, [props.formulario])
  return (
    <>
    <div className="tasklist">
      
    {formulariomap.map((formulario, index) => <Task title={formulario.title} desc={formulario.desc} completed={false} key={index} />)}
    </div>
    </>
  )
}
         
