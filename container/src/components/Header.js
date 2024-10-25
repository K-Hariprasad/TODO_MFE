import React from "react";

const Header = () => {
  const handleLogin = () => {
    alert("Redirecting to login...");
  };

  return (
    <header style={styles.header}>
      <div>
        <h1 style={styles.title}>Todo App</h1>
        <p style={styles.subtitle}>Organize your tasks efficiently</p>
      </div>
      <button onClick={handleLogin} style={styles.loginButton}>
        Login
      </button>
    </header>
  );
};

// Inline styles for the header component
const styles = {
  header: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "20px",
    display: "flex",
    "align-items": "center",
    "justify-content": "space-between",
  },
  title: {
    margin: 0,
    fontSize: "2em",
  },
  subtitle: {
    margin: "5px 0 10px",
    fontSize: "1em",
    fontWeight: "300",
  },
  loginButton: {
    backgroundColor: "#FFF",
    color: "#4CAF50",
    border: "none",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default Header;
