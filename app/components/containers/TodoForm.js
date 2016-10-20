import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions'; // get the addTodo action

let TodoForm = ({ dispatch }) => {
  let input

  return (
    <form className="form-inline" onSubmit={e => {
      e.preventDefault()
      if (!input.value.trim()) {
        return
      }
      dispatch(addTodo(input.value))
      input.value = ''
    }}>
      <div className="text-center">
        <input className="form-control col-md-8" style={{ width: "300px" }} type="text" name="new-item" ref={node => {
          input = node
        }}/>
        <input className="btn btn-primary" type="submit" value="Add Item" />
      </div>
    </form>
  )
}
TodoForm = connect()(TodoForm)

export default TodoForm
