import { expect } from 'chai';
import TodoList from '../app/reducers/TodoList.js';
import { makeId } from '../app/actions';
import _ from 'lodash';

describe('Todo List Reducer Test Suite', () => {
  it('Should return an empty initial state', () => {
    const initialState = [];
    const newState = TodoList(undefined, {});
    expect(newState).to.have.length(0)
  });

  it('Should handle todo.add and return todos with length of one', () => {
    const initialState = [];
    const newState = TodoList(initialState, {type: 'todo.add', text: 'test todo', id: makeId() });
    expect(newState).to.have.length(1);
  });

  it('Should handle todo.add and return the correct property values for the first item in the array', () => {
    const initialState = [];
    const payload = { type: 'todo.add', text: 'test todo', id: makeId() };
    const newState = TodoList(initialState, payload );
    expect(newState).to.have.length(1);
    expect(newState[0]).to.have.property('text').to.equal('test todo');
    expect(newState[0]).to.have.property('completed').to.equal(false);
  });
  it('Should handle todo.done and mark the appropriate todo as completed', () => {
    const initialState = [{ completed: false, text: 'test todo', id: makeId() }, { completed: false, text: 'test todo', id: makeId() }];
    const payload = { type: 'todo.done', id: initialState[0].id };
    const newState = TodoList(initialState, payload );
    expect(newState).to.have.length(2);
    expect(newState[1]).to.have.property('completed').to.equal(false);
    expect(newState[0]).to.have.property('completed').to.equal(true);
  });
  it('Should handle todo.remove and remove the appropriate todo', () => {
    const initialState = [{ completed: false, text: 'test todo', id: makeId() }, { completed: false, text: 'test todo', id: makeId() }];
    const payload = { type: 'todo.remove', id: initialState[0].id };
    const newState = TodoList(initialState, payload );
    expect(newState).to.have.length(1);
    expect(newState[0]).to.have.property('id').to.equal(initialState[1].id);
  });
});
