import { useEffect, useState } from 'react';
import { getAllTasks, deleteTask } from '../services/taskApi';

function TaskList({ refresh, onEdit }) {
    const [tasks, setTasks] = useState([])

    const fetchTasks = () => {
        getAllTasks().then((res) => {
            setTasks(res.data.tasks)
        })
    }

    useEffect(() => {
        fetchTasks()
    }, [refresh]);

    const handleDelete = async (id) => {
        await deleteTask(id);
        fetchTasks();
    }

    return (
        <div className="task-list">
            <h2 style={{marginBottom:"10px",color:"whitesmoke"}}>Tasks</h2>
            {tasks.map((task) => (
                <div key={task._id} className="task-item">
                    <p>{task.title}</p>
                    <div className='edit-delete'>
                        <button onClick={() => onEdit(task)}>Edit</button>
                        <button onClick={() => handleDelete(task._id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    )
}




export default TaskList;