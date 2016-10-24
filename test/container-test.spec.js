import React from 'react'
import { shallow, mount } from 'enzyme'
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { expect } from 'chai';
import TodoList from '../app/reducers/TodoList.js';
import TodoListContainer from '../app/components/containers/TodoListContainer.js'

function setup(initialState, container) {
  //create a store for these tests, initialize the state to the initial state passed in.
  let testStore = createStore(TodoList, initialState);
  let enzymeWrapper;
  if(container === 'list'){
    enzymeWrapper = mount(<Provider store={testStore}><TodoListContainer /></Provider>)
  }
  return {
    enzymeWrapper
  }
};

describe('containers', () => {
  describe('TodoList Container', () => {
    it('should render self and child components when given an initial state that contains todos', () => {
      const { enzymeWrapper } = setup([{ id: '0', text: 'Test 1', completed: false },
      { id: '1', text: 'Test 2', completed: false },
      { id: '2', text: 'Test 3', completed: false }], 'list');
      expect(enzymeWrapper.find('ul').hasClass('list-group')).to.equal(true)
      expect(enzymeWrapper.find('li')).to.have.length(3);
    });
    it('should render self and no child components when given an empty initial state', () => {
      const { enzymeWrapper } = setup([], 'list')
      expect(enzymeWrapper.find('ul').hasClass('list-group')).to.equal(true)
      expect(enzymeWrapper.find('li')).to.have.length(0);
    });
  });
});
