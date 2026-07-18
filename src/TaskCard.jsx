import {useState} from 'react'; 

function TaskCard({task, onDelete, onEdit}) {
  const [isDone, setIsDone] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.name);

  function handleDone() {
    setIsDone(!isDone);
  }
  function handleDelete() {
    onDelete(task.id);
  }
  function handleTaskEdit(event) {
    setEditedTask(event.target.value);
  }

  function handleSaveEdit() {
    onEdit(task.id, editedTask);
    setIsEditing(false);
  }

  function handleEditButtonClick() {
  if (isEditing) {
    handleSaveEdit(); 
  } else {
    setIsEditing(true);
  }
}

  return(
    <div className='task'>
      <button className={`done-button ${isDone ? 'done' : 'not-done'}`} onClick={handleDone}></button>
      {isEditing ? 
      <input onChange={handleTaskEdit} value={editedTask}/>
      :
      <span className={isDone ? 'task-done' : ''}>{task.name}</span>}
      <button className='edit-button' onClick={handleEditButtonClick}>
        {isEditing ? "Save" : "Edit"}
      </button>
      <button className='delete-button' onClick={handleDelete}>Delete</button>
    </div>
  )
}
export default TaskCard