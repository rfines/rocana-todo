import React, { PropTypes } from 'react'

const TodoItem = ({ text, id, removeTodo }) => (
  <li className="list-group-item list-group-item-success notice notice-success">
    <i className="glyphicon glyphicon-ok" />
    <span className="list-item-text">{text}</span>
    <div className="button-group pull-right">
      <button title="delete item" type="button" data-action="delete" onClick={e => {
        removeTodo(id)
      }} className="btn btn-xs btn-link">
        <i className="glyphicon glyphicon-remove" />
      </button>
    </div>
  </li>
)

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  removeTodo: PropTypes.func.isRequired
}

export default TodoItem
