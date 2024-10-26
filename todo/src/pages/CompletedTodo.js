import React, { useState, useEffect } from "react";

function CompletedTodo() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  // Load tasks from localStorage on initial render
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    const completedTasks = savedTasks.filter(i=>i.completed)
    if (completedTasks) setTasks(completedTasks);
  }, []);

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={styles.container}>

      {" "}
      <ul style={styles.list}>
        {tasks.map((t, index) => (
          <li
            key={index}
            style={{
              ...styles.listItem,
            }}
          >
            <span
              onClick={() => toggleComplete(index)}
              style={{ cursor: "pointer" }}
            >
              {t.text}
            </span>
            <span
              onClick={() => toggleComplete(index)}
              style={{ cursor: "pointer" }}
            >
              {t.createdAt}
            </span>
            <button
              onClick={() => deleteTask(index)}
              style={styles.deleteButton}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompletedTodo;

// Inline styles for simplicity
const styles = {
  container: {
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: "0",
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    borderBottom: "1px solid #ccc",
    fontSize: "18px",
    cursor: "pointer",
  },
  deleteButton: {
    background: "red",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
  },
};
