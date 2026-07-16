import './App.css'
import { useState } from 'react';
import TaskCard from './TaskCard.jsx';

function App() {
  const [tasks, setTasks] = useState(['task1','task2','task3']);
  const [taskInput, setTaskInput] = useState('');

  function handleTaskInput(event) {
    setTaskInput(event.target.value);
  }
  function addTask() {
    setTasks([...tasks, taskInput]);
  }
  
  return(
    <div className="container">
      <input className='input' placeholder='Enter a task' value={taskInput} onChange={handleTaskInput}/>
      <button className='add-button' onClick={addTask}>Add</button>
      <div className='tasks'>
        {tasks.map(task => <TaskCard task={task} key={task}/>)}
      </div>
    </div>
  )
}

export default App
