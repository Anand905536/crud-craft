import './styles/task.css';
import { useState } from 'react';
import CreateTask from './features/tasks/pages/CreateTask';
import TaskList from './features/tasks/pages/TaskList';

function App() {
  const [refresh, setRefresh] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleTaskCreated = () => {
    setRefresh(!refresh);
  };

  return (
    <div className="page">
     <div className='main'>
      <CreateTask
          onTaskCreated={handleTaskCreated}
          selectedTask={selectedTask}
          setSelectedTask={setSelectedTask}
        />
        <TaskList
          refresh={refresh}
          onEdit={setSelectedTask}
        />
      </div>
    </div>
  );
}

export default App;







