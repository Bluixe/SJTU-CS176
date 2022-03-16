/* eslint-disable eslint-comments/disable-enable-pair */

import { Utils } from './utils';

export const TodoModel = function (key) {
  this.key = key;
  this.todos = Utils.store(key);
  this.onChanges = [];
};

// TodoModel.prototype.subscribe = function (onChange) {
//   this.onChanges.push(onChange);
// };

TodoModel.prototype.inform = function () {
  Utils.store(this.key, this.todos);
  // this.onChanges.forEach(cb => {
  //   cb();
  // });
};

TodoModel.prototype.addTodo = function (title) {
  this.todos = this.todos.concat({
    id: Utils.uuid(),
    title,
    completed: false,
  });

  this.inform();
};

TodoModel.prototype.toggleAll = function (checked) {
  this.todos = this.todos.map(todo =>
    Utils.extend({}, todo, { completed: checked }),
  );

  this.inform();
};
TodoModel.prototype.toggle = function (todoToToggle) {
  this.todos = this.todos.map(todo =>
    todo !== todoToToggle
      ? todo
      : Utils.extend({}, todo, { completed: !todo.completed }),
  );

  this.inform();
};

TodoModel.prototype.destroy = function (todo) {
  this.todos = this.todos.filter(candidate => candidate !== todo);

  this.inform();
};

TodoModel.prototype.save = function (todoToSave, text) {
  this.todos = this.todos.map(todo =>
    todo !== todoToSave ? todo : Utils.extend({}, todo, { title: text }),
  );

  this.inform();
};

TodoModel.prototype.clearCompleted = function () {
  this.todos = this.todos.filter(todo => !todo.completed);

  this.inform();
};
