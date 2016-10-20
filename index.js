import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import TodoList from './app/reducers/TodoList.js';
import App from './app/components/presentation/App.js';

let store = createStore(TodoList);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
