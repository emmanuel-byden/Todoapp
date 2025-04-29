import React from 'react';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  const { id, text, completed } = todo;

  return (
    <li className={`todo-item ${completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      <span>{text}</span>
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
