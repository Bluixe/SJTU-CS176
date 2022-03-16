import { useRef, useState } from 'react';
import classNames from 'classnames';

export function TodoItem(props) {
  const {
    key,
    todo,
    onToggle,
    onDestroy,
    onEdit,
    isEditing,
    onSave,
    onCancel,
  } = props;
  const ESCAPE_KEY = 27;
  const ENTER_KEY = 13;
  const editFieldRef = useRef();

  const [editText, setEditText] = useState(todo.title);

  function handleSubmit(event) {
    const val = editText.trim();
    if (val) {
      onSave(val);
      setEditText(val);
    } else {
      onDestroy();
    }
  }
  function handleEdit() {
    onEdit();
    setEditText(todo.title);
  }
  function handleKeyDown(event) {
    if (event.which === ESCAPE_KEY) {
      setEditText(todo.title);
      onCancel(event);
    } else if (event.which === ENTER_KEY) {
      handleSubmit(event);
    }
  }
  function handleChange(event) {
    if (isEditing) {
      setEditText(event.target.value);
    }
  }
  function shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.todo !== todo ||
      nextProps.isEditing !== isEditing ||
      nextState.editText !== editText
    );
  }
  function componentDidUpdate(prevProps) {
    if (!prevProps.isEditing && isEditing) {
      const node = React.findDOMNode(editFieldRef);
      node.focus();
      node.setSelectionRange(node.value.length, node.value.length);
    }
  }
  return (
    <li
      className={classNames({
        completed: todo.completed,
        editing: isEditing,
      })}>
      <div className="view">
        <input
          className="toggle"
          s={true}
          type="checkbox"
          checked={todo.completed}
          onChange={onToggle}
        />
        <label onDoubleClick={() => handleEdit()}>{todo.title}</label>
        <button type="button" className="destroy" onClick={onDestroy} />
      </div>
      <input
        ref={editFieldRef}
        className="edit"
        value={editText}
        onBlur={event => handleSubmit(event)}
        onChange={event => handleChange(event)}
        onKeyDown={event => handleKeyDown(event)}
      />
    </li>
  );
}
