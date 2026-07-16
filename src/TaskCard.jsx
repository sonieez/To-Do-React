import {useState} from 'react'; 

function TaskCard({task, onDelete}) {
  const [isDone, setIsDone] = useState(false);

  function handleDone() {
    setIsDone(!isDone);
  }
  function handleEdit() {

  }
  function handleDelete() {
    onDelete(task.id);
  }
  return(
    <div className='task'>
      <button className='done-button' onClick={handleDone}>{isDone ? "done" : "not done"}</button>
      {task.name}
      <button className='edit-button' onClick={handleEdit}>Edit</button>
      <button className='delete-button' onClick={handleDelete}>Delete</button>
    </div>
  )
}
export default TaskCard