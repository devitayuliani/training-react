// pages/index.js
'use client'
import { useState } from "react";
import styles from "../../styles/login.module.css";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className={styles.container2}>
      {/* <form className={styles.form}> */}
      <div className={styles.form}>
      <h1 className="text-black text-center">To-Do List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add new task"
        className={styles.input}
      />
      <button onClick={handleAddTask} className={styles.button_task}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={styles.input}>
            {task}{' '}
            <button onClick={() => handleDeleteTask(index)} className={styles.button_delete}>Delete</button>
          </li>
        ))}
      </ul>
</div>
      {/* </form> */}
    </div>
  );
}
