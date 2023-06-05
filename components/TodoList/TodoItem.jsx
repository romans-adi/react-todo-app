import React, { useState } from 'react';

const TodoItem = ({ todo, toggleTodo, deleteTodo, saveTodoText }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleToggle = () => {
    toggleTodo(todo.id);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    saveTodoText(todo.id, newText);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNewText(todo.text);
  };

  const handleChange = (event) => {
    setNewText(event.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      toggleTodo(todo.id, newText);
      setIsEditing(false);
    }
  };

  return (
    <li>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newText}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={handleToggle}
          />
          <span
            onClick={handleToggle}
            className={todo.completed ? 'completed' : ''}
          >
            {todo.text}
          </span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
