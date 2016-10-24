import React, { PropTypes } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TodoListItemContainer from '../containers/TodoListItemContainer.js'

class TodoList extends React.Component {
  render () {
    let items = this.props.todos.map((todo, i) => (
      <TodoListItemContainer key={todo.id} {...todo} />
    ));
    return (
      <ul className="list-group">
        <ReactCSSTransitionGroup
          transitionName='fade'
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={400}
          transitionAppear={true}
          transitionAppearTimeout={500}>
          {items}
        </ReactCSSTransitionGroup>
    </ul>
    )
  }
}
//a todo list contains a list of todo items and a callback to call when the todo is clicked.
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
}

export default TodoList
