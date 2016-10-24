import * as actions from '../app/actions';
import { expect } from 'chai';
import _ from 'lodash';

describe('actions test suite', () => {
  it('Should return the appropriate action to add a new todo', () => {
    const text = "a new todo";
    expect(actions.addTodo(text)).to.have.property('text').to.equal(text);
    expect(actions.addTodo(text)).to.have.property('type').to.equal('todo.add');
  });
  it('Should return the appropriate action to complete a todo', () => {
    const id = actions.makeId()
    expect(actions.completeTodo(id)).to.have.property('id').to.equal(id);
    expect(actions.completeTodo(id)).to.have.property('type').to.equal('todo.done');
  });
  it('Should return the appropriate action to remove a todo', () => {
    const id = actions.makeId()
    expect(actions.removeTodo(id)).to.have.property('id').to.equal(id);
    expect(actions.removeTodo(id)).to.have.property('type').to.equal('todo.remove');
  });
});
