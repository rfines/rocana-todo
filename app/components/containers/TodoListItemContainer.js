// src/containers.js
import { connect } from 'react-redux';
import TodoItem from '../presentation/TodoItem.js';
import { addTodo, removeTodo } from '../../actions';

const TodoListItemContainer = connect(
  function mapStateToProps(state) {
    // ...
    return { todo: state, removeTodo };
  },
  function mapDispatchToProps(dispatch) {
    // ...
    return {
      removeTodo: id => dispatch(removeTodo(id))
    };
  }
)(TodoItem);

export default TodoListItemContainer;
