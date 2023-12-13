import { makeAutoObservable } from 'mobx';

const todoStore = makeAutoObservable({
  // observable
  todos: [],

  // computed
  get completedTodos() {
    return this.todos.filter((todo) => todo.completed);
  },

  // action
  addTodo(todo) {
    this.todos.push(todo);
  },

  // action
  toggleTodoCompletion(id) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  },

  // action
  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  },

  // action
  clearCompletedTodos() {
    this.todos = this.todos.filter((todo) => !todo.completed);
  },
});

export default todoStore;
