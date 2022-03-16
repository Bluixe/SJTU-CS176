/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable max-statements */
import { useState } from 'react';
import { TodoFooter } from './TodoFooter';
import { TodoItem } from './TodoItem';

export function TodoApp(props) {
  const { model } = props;
  const [editing, setEditing] = useState(null);
  const [newTodo, setNewTodo] = useState('');
  const [nowShowing, setNowShowing] = useState('all');
  const [status, setStatus] = useState(true);
  const ENTER_KEY = 13;
  const ALL_TODOS = 'all';
  const ACTIVE_TODOS = 'active';
  const COMPLETED_TODOS = 'completed';

  // function componentDidMount() {
  //   const { setState } = this;
  //   const router = Router({
  //     '/': setState.bind(this, { nowShowing: app.ALL_TODOS }),
  //     '/active': setState.bind(this, { nowShowing: app.ACTIVE_TODOS }),
  //     '/completed': setState.bind(this, { nowShowing: app.COMPLETED_TODOS }),
  //   });
  //   router.init('/');
  // }

  function handleChange(event) {
    setNewTodo(event.target.value);
  }
  function handleKeyDown(event) {
    if (event.keyCode === ENTER_KEY) {
      event.preventDefault();
      const val = newTodo.trim();
      if (val) {
        model.addTodo(val);
        setNewTodo('');
      }
    }
  }
  function toggle(todoTodoggle) {
    model.toggle(todoTodoggle);
    setStatus(!status);
  }
  function toggleAll(event) {
    model.toggleAll(event.target.checked);
    setStatus(!status);
  }
  function destroy(todo) {
    model.destroy(todo);
    setStatus(!status);
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
    setStatus(!status);
  }
  function createTodoApp() {
    let footer, main;
    const { todos } = model;
    const shownTodos = todos.filter(todo => {
      switch (nowShowing) {
        case ACTIVE_TODOS:
          return !todo.completed;
        case COMPLETED_TODOS:
          return todo.completed;
        default:
          return true;
      }
    });
    const todoItems = shownTodos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        onToggle={() => toggle(todo)}
        onDestroy={() => destroy(todo)}
        onEdit={() => edit(todo)}
        isEditing={editing === todo.id}
        onSave={text => save(todo, text)}
        onCancel={() => cancel()}
      />
    ));

    const activeTodoCount = todos.reduce(
      (accum, todo) => (todo.completed ? accum : accum + 1),
      0,
    );

    const completedCount = todos.length - activeTodoCount;

    if (activeTodoCount || completedCount) {
      footer = (
        <TodoFooter
          count={activeTodoCount}
          completedCount={completedCount}
          nowShowing={nowShowing}
          onClearCompleted={() => clearCompleted()}
        />
      );
    }

    if (todos.length) {
      main = (
        <section className="main">
          <input
            id="toggle-all"
            className="toggle-all"
            type="checkbox"
            onChange={event => toggleAll(event)}
            checked={activeTodoCount === 0}
          />
          <label htmlFor="toggle-all" />
          <ul className="todo-list">{todoItems}</ul>
        </section>
      );
    }

    return (
      <div className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            value={newTodo}
            onKeyDown={event => handleKeyDown(event)}
            onChange={event => handleChange(event)}
            autoFocus={true}
          />
        </header>
        {main}
        {footer}
      </div>
    );
  }

  return createTodoApp();
}
