// src/containers.js
import { connect } from 'react-redux';
import TodoList from '../presentation/TodoList.js';
import { addTodo, removeTodo, completeTodo } from '../../actions';

const TodoListContainer = connect(
  function mapStateToProps(state) {
    // ...
    return { todos: state };
  },
  function mapDispatchToProps(dispatch) {
    // ...
    return {
      addTodo: text => dispatch(addTodo(text)),
      removeTodo: id => dispatch(removeTodo(id)),
      completeTodo: id => dispatch(removeTodo(id)),
    };
  }
)(TodoList);

export default TodoListContainer;
