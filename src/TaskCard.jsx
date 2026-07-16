import {useState} from 'react'; 

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
export default TaskCard