import './App.css'
import { useState } from 'react';

function App() {

  //const [tasks, setTasks] = useState([{id: 1, name: 'task1'}, {id: 2, name: 'task2'}, {id: 3, name: 'task3'}]);
  const [tasks, setTasks] = useState(['task1','task2','task3']);
  const [taskInput, setTaskInput] = useState('');

  function handleTaskInput(event) {
    setTaskInput(event.target.value);
  }
  function addTask() {
    setTasks([...tasks, taskInput]);
  }

  function TaskCard({task}) {
    const [isDone, setIsDone] = useState(false);

    function handleDone() {
      setIsDone(isDone ? false : true);
    }
    function handleEdit() {

    }
    function handleDelete() {

    }
    return(
      <div className='task'>
        <button className='done-button' onClick={handleDone}>{isDone ? "done" : "not done"}</button>
        {task}
        <button className='edit-button' onClick={handleEdit}>Edit</button>
        <button className='delete-button' onClick={handleDelete}>Delete</button>
      </div>
    )
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
