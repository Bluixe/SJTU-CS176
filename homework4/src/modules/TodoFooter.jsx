import classNames from 'classnames';
import { Utils } from '../utils';

export function TodoFooter(props) {
  const { count, completedCount, nowShowing, onClearCompleted } = props;
  const activeTodoWord = Utils.pluralize(count, 'item');
  let clearButton = null;
  const ALL_TODOS = 'all';
  const ACTIVE_TODOS = 'active';
  const COMPLETED_TODOS = 'completed';

  if (completedCount > 0) {
    clearButton = (
      <button
        type="button"
        className="clear-completed"
        onClick={onClearCompleted}>
        Clear completed
      </button>
    );
  }
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{count}</strong> {activeTodoWord} left
      </span>
      <ul className="filters">
        <li>
          <a
            // href="#/"
            className={classNames({ selected: nowShowing === ALL_TODOS })}>
            All
          </a>
        </li>{' '}
        <li>
          <a
            // href="#/active"
            className={classNames({
              selected: nowShowing === ACTIVE_TODOS,
            })}>
            Active
          </a>
        </li>{' '}
        <li>
          <a
            // href="#/completed"
            className={classNames({
              selected: nowShowing === COMPLETED_TODOS,
            })}>
            Completed
          </a>
        </li>
      </ul>
      {clearButton}
    </footer>
  );
}
