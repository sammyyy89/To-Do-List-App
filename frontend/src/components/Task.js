// component for tasks in App.js
import React from 'react'

// import from react-icons 
import { FaPen, FaTrashAlt, FaLightbulb } from "react-icons/fa";

const Task = ({text, editClicked, deleteClicked}) => {
  return (
    <div className="task">
        <div className="text">
            <FaLightbulb className="lightbulb" /> {text} </div>
        <div className="icons">
            <FaPen className="icon edit" onClick={editClicked} />
            <FaTrashAlt className="icon del" onClick={deleteClicked} />
        </div>
    </div>
  )
}

export default Task