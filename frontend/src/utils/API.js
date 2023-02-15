// Handle API
import axios from 'axios' // JS library used to make HTTP requests from Node.js (to communicate with the backend)

const baseUrl = "https://to-do-list-app-k4fw.onrender.com" // "http://localhost:3001"

const getAllToDos = (setToDo) => {
    axios
    .get(baseUrl)
    .then(({data}) => {
        console.log("Data: ", data)
        setToDo(data)
    })
}

const addTask = (text, setText, setToDo) => {
    axios
    .post(`${baseUrl}/add`, {text})
    .then((data) => {
        console.log("Data: ", data)
        setText("") // clear the text field after adding
        getAllToDos(setToDo) // fetch all the to-do's including the new one
    })
    .catch((err) => console.log(err))

}

const editTask = (taskId, text, setToDo, setText, setIsEditing) => {
    axios
    .post(`${baseUrl}/edit`, {_id: taskId, text})
    .then((data) => {
        setText("") // clear the text field after editing
        setIsEditing(false) // set isEditing to false 
        getAllToDos(setToDo) // fetch all the to-do's including the editied one
    })
    .catch((err) => console.log(err))
}

const deleteTask = (_id, setToDo) => {
    axios 
    .post(`${baseUrl}/delete`, {_id})
    .then((data) => {
        console.log("Deleted successfully")
        getAllToDos(setToDo) // fetch all the to-do's after the deletion 
    })
    .catch((err) => console.log(err))
}

export {getAllToDos, addTask, editTask, deleteTask}