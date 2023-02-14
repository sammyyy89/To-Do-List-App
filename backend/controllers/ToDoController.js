// Define how the data is going to be saved in the database

const ToDoModel = require('../models/ToDoModel')

// Get all to-do's
module.exports.getToDos = async (req, res) => {
    const toDo = await ToDoModel.find() // find() method => retunrs all occurrences in the selection. Same as "SELECT * " in MySQL
    res.send(toDo)
}

// Save a to-do in the database
module.exports.addToDo = async (req, res) => {
    const { text } = req.body

    ToDoModel
    .create({text})
    .then((data) => {
        console.log("Task ", data, "Task added successfully.")
        res.send(data)
    })
}

// Edit a to-do 
module.exports.editToDo = async (req, res) => {
    const {_id, text} = req.body
    ToDoModel
    .findByIdAndUpdate(_id, {text})
    .then(()=>res.send("Task edited successfully."))
    .catch((err) => console.log(err))
}

// Delete a to-do
module.exports.deleteToDo = async (req, res) => {
    const _id = req.body
    ToDoModel
    .findByIdAndDelete(_id)
    .then(() => res.send("Task deleted successfully."))
    .catch((err) => console.log(err))
}