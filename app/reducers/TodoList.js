import _ from 'lodash';

// we will still use this reducer, but for actions regarding individual items,
// we will pass the call off to the child reducer for todoItems.
const TodoList = (state = [], action) => {
  switch (action.type) {
    case 'todo.add': // return a new array with the new todo item.
      return state.concat([  //initiailze a new array with the new item in it and concat it to the state.
        {
          id: action.id,
          text: action.text,
          completed:false
        }]);
    case 'todo.done': // return a new array with the specified todo item marked completed.
      return _.map(state, (todo) => {
        if (todo.id === action.id) {
          return {
            id: todo.id,
            text: todo.text,
            completed: true
          };
        }
        return todo;
      });
    case 'todo.remove':
      //return a new array with the removed todo missing.
      return _.reject(state, (todo) => todo.id === action.id);
    default:
      return state;
  }
};

export default TodoList;
