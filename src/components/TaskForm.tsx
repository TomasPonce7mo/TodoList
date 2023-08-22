import { form } from "../types/types";

interface Props {
  formulario: form,
  setFormulario: any
}

export const TaskForm = ( props:Props ) => {

    const tx = document.getElementsByTagName("textarea");
for (let i = 0; i < tx.length; i++) {
  tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
  tx[i].addEventListener("input", OnInput, false);
}

function OnInput(this: any) {
  this.style.height = 0;
  this.style.height = (this.scrollHeight) + "px";
}

function submitEvent () {
  props.setFormulario({
    title: document.getElementsByName("title").values,
    desc: document.getElementsByName("desc").values,
  })
}

  return (
    <form id="taskform" className="taskform">
        <h2 className="bottomline">Add a new task</h2>
        <input name="title" type="text" defaultValue="Title"></input> <br/>
        <textarea name="desc" defaultValue="Description"></textarea> <br/>
        <button className="button" type="submit" onSubmit={submitEvent}>Add</button>
    </form>
  )
}

