const validate = require('../../middlewares/validate')
const { createTaskValidator, updateTaskValidator } = require('./validators/task.validator');
const express = require("express")
const router = express.Router();
const { getAllTasks, createTask, getTaskById, updateTask, deleteTask } = require('./controllers/task.controller')

router.get('/', getAllTasks)
router.get('/:id', getTaskById);
router.post('/', createTaskValidator, validate, createTask)
router.put('/:id',updateTaskValidator, validate, updateTask)
router.delete('/:id', deleteTask)

module.exports = router;
