import './App.css'
import { useEffect, useState } from 'react';
import TaskCard from './TaskCard.jsx';

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  const [taskInput, setTaskInput] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function handleTaskInput(event) {
    setTaskInput(event.target.value);
  }
  function addTask() {
    if (taskInput) {
      setTasks(t => [...t, {id: Date.now(), name: taskInput}]);
      setTaskInput(''); 
    }
  }
  function deleteTask(taskId) {
    setTasks(t => t.filter(task => task.id !== taskId));
  }
  
  function editTask(taskId, newName) {
    setTasks(t => t.map((task) => {
      return (task.id === taskId) ? {...task, name: newName} : task
    }))
  }
  
  return(
    <div className="App">

      <div className='navigation-bar'>
        <h1>To-Do App</h1>
      </div>

      <div className="container">

        <h2 className='header'>Tasks</h2>
      
        <input className='input' placeholder='Enter a task' value={taskInput} onChange={handleTaskInput}/>

        <button className='add-button' onClick={addTask}>Add</button>

        <div className='tasks'>
          {tasks.map(task => <TaskCard task={task} key={task.id} onDelete={deleteTask} onEdit={editTask}/>)}
        </div>
        
      </div>
    </div>
    
  )
}

export default App
