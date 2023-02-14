const Router = require('express')
const { getToDos, addToDo, editToDo, deleteToDo } = require("../controllers/ToDoController")

const router = Router()

router.get('/', getToDos)
router.post('/add', addToDo)
router.post('/edit', editToDo)
router.post('/delete', deleteToDo)

module.exports = router
