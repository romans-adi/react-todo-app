import React from 'react';
import TodoItem from './TodoItem';
import './todoList.scss';

function TodoList({ todos, toggleTodo, deleteTodo, setTodos }) {
  const saveTodoText = (id, newText) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: newText };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          saveTodoText={saveTodoText}
        />
      ))}
    </ul>
  );
}

export default TodoList;
