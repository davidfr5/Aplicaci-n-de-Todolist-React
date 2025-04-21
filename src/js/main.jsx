import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      setTasks([...tasks, inputValue.trim()]);
      setInputValue("");
    }
  };

  const removeTask = (indexToRemove) => {
    setTasks(tasks.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div style={{ fontFamily: "sans-serif", marginTop: "40px", textAlign: "center" }}>
      <h1 style={{ fontWeight: 100, color: "#ccc", fontSize: "50px" }}>TodoList</h1>
      <div style={{ maxWidth: "400px", margin: "0 auto", textAlign: "left" }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            boxSizing: "border-box",
            border: "1px solid #ccc"
          }}
        />
        <ul style={{ listStyle: "none", padding: 0, marginTop: "10px" }}>
          {tasks.length === 0 ? (
            <li style={{ color: "#888", fontStyle: "italic" }}>No hay tareas, añadir tareas</li>
          ) : 
          (tasks.map((task, index) => (
              <li
                key={index}
                style={{
                  padding: "10px",
                  borderBottom: "1px solid #eee",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
                onMouseEnter={(e) => (e.currentTarget.querySelector("button").style.opacity = 1)}
                onMouseLeave={(e) => (e.currentTarget.querySelector("button").style.opacity = 0)}
              >
                <span>{task}</span>
                <button
                  onClick={() => removeTask(index)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "red",
                    cursor: "pointer",
                    opacity: 0,
                    
                  }}
                >
                  ✖
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

// Render
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>
);
