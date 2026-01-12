const Task = require('../models/task.model');
const asyncHandler = require('../../../utils/asyncHandler');

// getAllTasks
const getAllTasks = asyncHandler(async (req, res) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10
    const skip = (page - 1) * limit
    const filter = {}
    if (req.query.status) {
        filter.status = req.query.status
    }
    const tasks = await Task.find(filter).skip(skip).limit(limit);
    const total = await Task.countDocuments(filter);
    res.status(200).json({
        page, limit, total, results: tasks.length, tasks
    })
})

// createTask
const createTask = asyncHandler(async (req, res) => {
    const { title, description } = req.body;
    const newTask = new Task({ title, description })
    const savedTask = await newTask.save();
    res.status(201).json(savedTask)
})

// get a single task by id
const getTaskById = asyncHandler(async (req, res) => {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' })
    res.status(200).json(task);
})

// updating a task
const updateTask = asyncHandler(async (req, res) => {
    const updatedTask = await Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    );
    if (!updatedTask) return res.status(404).json({ message: 'Task not found' })
    res.status(200).json(updatedTask);
})

// delete task
const deleteTask = asyncHandler(async (req, res) => {
    const deletedTask = await Task.findByIdAndDelete(req.params.id)
    if (!deleteTask) return res.status(404).json({ message: 'Task not Found' })
    res.status(200).json({ message: 'Task deleted successfully' })
})

module.exports = { getAllTasks, createTask, getTaskById, updateTask, deleteTask }