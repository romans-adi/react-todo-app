import React from 'react';

function TodoItem({ todo, toggleTodo, deleteTodo }) {
  const { id, text, completed } = todo;

  const handleToggle = () => {
    toggleTodo(id);
  };

  const handleDelete = () => {
    deleteTodo(id);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={handleToggle}
      />
      <span className={completed ? 'completed' : ''}>{text}</span>
      <button type="button" onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default TodoItem;
