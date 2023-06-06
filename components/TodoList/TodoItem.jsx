import React, { useState } from 'react';
import './todoList.scss';
import { FaEdit, FaTrash, FaTimes } from 'react-icons/fa';
import { MdSave } from 'react-icons/md';

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
    setNewText(todo.text); // Revert the edited text back to the original todo text
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
            className="edit-input"
            type="text"
            value={newText}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <button className="save-btn" onClick={handleSave}>
            <MdSave />
          </button>
          <button className="cancel-btn" onClick={handleCancel}>
            <FaTimes />
          </button>
        </div>
      ) : (
        <div>
          <label className="checkbox-container">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={handleToggle}
            />
            <span className="checkmark"></span>
          </label>
          <div className={todo.completed ? 'todo-text completed' : 'todo-text'}>
            {todo.text}
            <button onClick={handleEdit}>
              <FaEdit />
            </button>
            <button onClick={handleDelete}>
              <FaTrash />
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
