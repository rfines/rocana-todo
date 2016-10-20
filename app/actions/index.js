
// generic function to generate a mostly unique id.
const makeId = () => {
  let text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for(let i = 0; i < 8; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

// return an action to dispatch to add the todo with a new id and the text passed in.
const addTodo = (text) => {
  return {
    type: 'todo.add',
    id: makeId(),
    text
  }
};

// return an action to dispatch to remove the TodoItem with the given Id.
const removeTodo = (id) => {
  return {
    type: 'todo.remove',
    id
  }
};

// return an action to dispatch to complete the TodoItem with the given Id.
const completeTodo = (id) => {
  return {
    type: 'todo.done',
    id
  }
};

export { addTodo, removeTodo, completeTodo };
