import React, { useState, useEffect } from 'react';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  // Load tasks from localStorage on initial render
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage whenever tasks array changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={styles.container}>
      <h1>Todo App</h1>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task"
          style={styles.input}
        />
        <button onClick={addTask} style={styles.button}>Add Task</button>
      </div>
      <ul style={styles.list}>
        {tasks.map((t, index) => (
          <li key={index} style={{ ...styles.listItem, textDecoration: t.completed ? 'line-through' : 'none' }}>
            <span onClick={() => toggleComplete(index)} style={{ cursor: 'pointer' }}>
              {t.text}
            </span>
            <button onClick={() => deleteTask(index)} style={styles.deleteButton}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif'
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
    marginTop: '20px'
  },
  input: {
    flex: '1',
    padding: '10px',
    marginRight: '10px',
    fontSize: '16px'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer'
  },
  list: {
    listStyle: 'none',
    padding: '0'
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    borderBottom: '1px solid #ccc',
    fontSize: '18px',
    cursor: 'pointer'
  },
  deleteButton: {
    background: 'red',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer'
  }
};

export default Todo;
