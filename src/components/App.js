import React, { useState } from "react";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    {
      id: 2,
      text: "Build a React app",
      completed: false,
    },
    {
      id: 3,
      text: "Deploy the React app",
      completed: false,
    },
  ]);

  function handleComplete(id) {
    const rewrite = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: true } : todo
    );
    setTodos(rewrite);
  }

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Parent Component</h1>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;
