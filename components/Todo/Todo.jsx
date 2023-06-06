import React, { useState, useEffect } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';
import './todo.scss';

function Todo() {
  const [todos, setTodos] = useState([
    {id: 1,
    text: 'Do something crazy',
    completed: false,}
  ]);

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList classList="todo-list" todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} setTodos={setTodos}/>
    </div>
  );
}

export default Todo;
