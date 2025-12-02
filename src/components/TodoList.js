import React from "react";

export default function TodoList({ todos, handleComplete }) {
  return (
    <>
      <ul>
        <h2>Child Component</h2>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.text}
              {!todo.completed && (
                <button onClick={() => handleComplete(todo.id)}>
                  Complete
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}