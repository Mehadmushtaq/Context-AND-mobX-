import React from 'react';
import { observer } from 'mobx-react-lite';
import todoStore from './store';

const TodoApp = observer(() => {
  const handleAddTodo = () => {
    const newTodo = {
      id: Math.random(),
      text: 'New Todo',
      completed: false,
    };
    todoStore.addTodo(newTodo);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todoStore.todos.map((todo) => (
          <li key={todo.id}>
            <input
              type='checkbox'
              checked={todo.completed}
              onChange={() => todoStore.toggleTodoCompletion(todo.id)}
            />
            {todo.text}
            <button onClick={() => todoStore.removeTodo(todo.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <p>Completed todos: {todoStore.completedTodos.length}</p>
      <button onClick={() => todoStore.clearCompletedTodos()}>
        Clear Completed Todos
      </button>
    </div>
  );
});

export default TodoApp;
