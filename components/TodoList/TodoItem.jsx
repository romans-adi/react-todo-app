import React, { useState } from 'react';
import './todoList.scss';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FaEdit, FaTrash, FaTimes } from 'react-icons/fa';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MdSave } from 'react-icons/md';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const TodoItem = ({
  todo, toggleTodo, deleteTodo, saveTodoText,
}) => {
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
          <button type="button" className="save-btn" onClick={handleSave}>
            <MdSave />
          </button>
          <button type="button" className="cancel-btn" onClick={handleCancel}>
            <FaTimes />
          </button>
        </div>
      ) : (
        <div>
          <label htmlFor={`checkbox-${todo.id}`} className="checkbox-container">
            <input
              id={`checkbox-${todo.id}`}
              type="checkbox"
              checked={todo.completed}
              onChange={handleToggle}
            />
            <span className="checkmark" />
          </label>
          <div className={todo.completed ? 'todo-text completed' : 'todo-text'}>
            {todo.text}
            <button type="button" onClick={handleEdit}>
              <FaEdit />
            </button>
            <button type="button" onClick={handleDelete}>
              <FaTrash />
            </button>
          </div>
        </div>
      )}
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  saveTodoText: PropTypes.func.isRequired,
};

export default TodoItem;
