import { useState } from 'react'
import { createTask, updateTask } from '../services/taskApi'
import { useEffect } from 'react';
import '../../../styles/Task.css';


const CreateTask = ({ onTaskCreated, selectedTask, setSelectedTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        const taskData = { title, description }
        if (selectedTask) {
            await updateTask(selectedTask._id, taskData)
            setSelectedTask(null)
        }
        else {
            await createTask(taskData)
        }
        onTaskCreated();
        setTitle('')
        setDescription('')
    };

    useEffect(() => {
        if (selectedTask) {
            setTitle(selectedTask.title)
            setDescription(selectedTask.description || '')
        }
    }, [selectedTask])

    return (
        <div className="form-card">
            <h2>{selectedTask ? 'Edit Task' : 'Create Task'}</h2>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <textarea
                        placeholder="Description"
                        rows="4"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="btn" >
                    <button type="submit">
                        {selectedTask ? 'Update Task' : 'Add Task'}
                    </button>
                </div>
            </form>
        </div>
    );

}

export default CreateTask




