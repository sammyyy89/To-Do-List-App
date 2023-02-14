import { useEffect, useState } from "react";
import { getAllToDos, addTask, editTask, deleteTask } from "./utils/API";
import Task from "./components/Task";

function App() {
  // initial states passed through useState
  const [toDo, setToDo] = useState([]) 
  const [text, setText] = useState("")
  const [isEditing, setIsEditing] = useState(false)
  const [taskId, setTaskId] = useState("")

  useEffect(() => { 
    getAllToDos(setToDo) // will be called after render
  }, [])

  const editClicked = (_id, text) => {
    setIsEditing(true)
    setText(text)
    setTaskId(_id)
  }

  return (
    <div className="App">

      <div className="container">
        <h1>To-Do List</h1>

        <div className="top">
          <input type="text" 
          placeholder="Add a task"
          value={text}
          onChange={(e) => setText(e.target.value)}
           />

          <div className="addBtn" 
          // If isEditing is true, call editTask(). Otherwise, call addTask().
          onClick = { isEditing ? () => editTask(taskId, text, setToDo, setText, setIsEditing) 
          : () => addTask(text, setText, setToDo)}>
            {isEditing ? "Edit" : "Add"} {/* if isEditing is true, the button should show "Edit". "Add" otherwise. */ }
            </div>
        </div>
        
        <div className="inst">
          <h5>Click the pencil icon to edit the task and the trash can icon to delete the task.</h5>
        </div>

        <div className="tasks">
          {/* component */}
          {toDo.map((item) => <Task 
          key={item._id} 
          text={item.text}
          editClicked = {() => editClicked(item._id, item.text)}
          deleteClicked = {() => deleteTask(item._id, setToDo)} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
