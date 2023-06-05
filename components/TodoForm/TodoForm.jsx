import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import './todoForm.scss'

function TodoForm({ addTodo }) {
  const [todoText, setTodoText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim() !== '') {
      addTodo(todoText);
      setTodoText('');
    }
  };

  const handleChange = (e) => {
    setTodoText(e.target.value);
  };

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input
      className='add-input'
        type="text"
        value={todoText}
        onChange={handleChange}
        placeholder="Add todo..."
      />
      <button className='add-btn' type="submit">+</button>
    </form>
  );
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default TodoForm;
