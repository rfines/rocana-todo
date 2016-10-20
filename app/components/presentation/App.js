import React from 'react';
import TodoForm from '../containers/TodoForm.js';
import TodoListContainer from '../containers/TodoListContainer.js';

const App = () => (
  <div>
    <div className="list-contents">
      <TodoListContainer />
    </div>
    <div className="form-bottom text-center">
      <TodoForm />
    </div>
  </div>
)

export default App;
