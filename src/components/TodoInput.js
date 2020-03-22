import React, { Component } from 'react'
import './TodoInput.css';

export default class TodoInput extends Component {
  render() {
   const {item, handleChange, handleSubmit, editItem} = this.props
    return (
       <div className="input-container">
          <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                className="input-el" 
                placeholder="add a new task"
                value={item}
                onChange={handleChange}
                />
            <button 
                type="submit" 
                className="input-el" >
                    {editItem ? 'Edit Item' : 'Add Item'}
            </button>
          </form>
       </div>
    )
  }
}
