import React, { PropTypes } from 'react'
import TodoListItemContainer from '../containers/TodoListItemContainer.js'

const TodoList = ({ todos }) => (

  <ul className="list-group">
    {todos.map(todo =>
      <TodoListItemContainer key={todo.id} {...todo} />
    )}
  </ul>
)

//a todo list contains a list of todo items and a callback to call when the todo is clicked.
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
}

export default TodoList
