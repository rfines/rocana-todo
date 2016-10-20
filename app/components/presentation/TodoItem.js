import React, { PropTypes } from 'react'
/*<li class="list-group-item">
  <span class="list-item-text">Bring this TODO List to life!</span>
  <div class="button-group pull-right">
    <button type="button" data-action="done" class="btn btn-success btn-xs">
      <i class="glyphicon glyphicon-ok"></i> Done
    </button>
    <button title="delete item" type="button" data-action="delete" class="btn btn-xs btn-link">
      <i class="glyphicon glyphicon-remove"></i>
    </button>
  </div>
</li>*/
const TodoItem = ({ text, id, completed, removeTodo, completeTodo }) => (
  <li className={completed ?
    "list-group-item list-group-item-success notice notice-success":
    "list-group-item list-group-item-info notice notice-info"}
  >
  {
    completed ? (<i className="glyphicon glyphicon-ok" />): null
  }
    <span className="list-item-text"><strong>{text}</strong></span>
    <div className="button-group pull-right">
      <div>
      {
        !completed ? (<button type="button" data-action="done" onClick={e => {completeTodo(id)}} className="btn btn-info btn-xs">
          <i className="glyphicon glyphicon-ok"></i> Done
        </button>) : <div />
      }
        <button title="delete item" type="button" data-action="delete" onClick={e => {
          removeTodo(id)
        }} className={
          completed ? ("btn btn-xs btn-link"): "btn btn-xs btn-link btn-link-info"
        }>
          <i className="glyphicon glyphicon-remove" />
        </button>
      </div>
    </div>
  </li>
)

TodoItem.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  removeTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired
}

export default TodoItem
