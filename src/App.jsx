import './App.css'
import { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([{id: 1, name: 'task1'}, {id: 2, name: 'task2'}, {id: 3, name: 'task3'}]);

  function addTask() {
    alert('Task added!')
  }

  function TaskCard(task) {
    const [isDone, setIsDone] = useState(false);

    function handleButton() {
      setIsDone(isDone ? false : true);
    }
    return(
      <div className='task'>
        <button className='done-button' onClick={handleButton}>{isDone ? "done" : ""}</button>
        <p>{task.name}</p>

      </div>
    )
  }
  
  return(
    <div className="container">
      <input className='input' placeholder='Enter a task'/>
      <button className='add-button' onClick={addTask}>Add</button>
      <div className='tasks'>
        {tasks.map(task => <TaskCard task={task} key={task.id}/>)}
      </div>
    </div>
  )
}

export default App
