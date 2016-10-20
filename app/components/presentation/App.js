import React from 'react';
import TodoForm from '../containers/TodoForm.js';
import TodoListContainer from '../containers/TodoListContainer.js';

const App = () => (
  <div>
    <TodoListContainer />
    <TodoForm />
  </div>
)

export default App;
