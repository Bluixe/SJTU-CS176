import { useState } from 'react';

export function TodoApp(props) {
  const [model] = props;
  const [editing, setEditing] = useState(null);
  const [newTodo, setNewTodo] = useState('');
  const [nowShowing, setNowShowing] = useState('all');
  const ENTER_KEY = 13;
  const ALL_TODOS = 'all';
  const ACTIVE_TODOS = 'active';
  const COMPLETED_TODOS = 'completed';

  function handleChange(event) {
    setNewTodo(event.target.value);
  }
  function handleKeyDown(event) {
    if (event.keyCode === ENTER_KEY) {
      event.preventDefault();
      const val = newTodo.trim();
      if (val) {
        model.addTodo.trim();
        setNewTodo('');
      }
    }
  }
  function toggle(todoTodoggle) {
    model.toggle(todoTodoggle);
  }
  function toggleAll(event) {
    model.toggleAll(event.target.checked);
  }
  function destroy(todo) {
    model.destroy(todo);
  }
  function edit(todo) {
    setEditing(todo.id);
  }
  function save(todoToSave, text) {
    model.save(todoToSave, text);
    setEditing(null);
  }
  function cancel() {
    setEditing(null);
  }
  function clearCompleted() {
    model.clearCompleted();
  }
  function createTodoApp() {
    const shownTodos = model.todos.filter(todo => {
      switch (nowShowing) {
        case ACTIVE_TODOS:
          return !todo.completed;
        case COMPLETED_TODOS:
          return todo.completed;
        default:
          return true;
      }
    });
    const todoItems = shownTodos.map();
  }

  return <div className="todoapp"></div>;
}
