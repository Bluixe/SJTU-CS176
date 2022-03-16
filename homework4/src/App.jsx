/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable no-var */

import './App.css';
import { TodoModel } from './todoModel';
import { TodoApp } from './modules/TodoApp';

var model = new TodoModel('react-todos');
const App = () => <TodoApp model={model} />;

export default App;
