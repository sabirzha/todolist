import React, { Component } from 'react'

export default class TodoInput extends Component {
  render() {
   const {item, handleChange, handleSubmit, editItem} = this.props
    return (
       <div className="input-container">
          <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                className="input" 
                placeholder="add a new task"
                value={item}
                onChange={handleChange}
                />
            <button 
                type="submit" 
                className= {
                    editItem 
                        ? "add-item-btn"
                        : "edit-item-btn"
                }>
                    {editItem ? 'Edit Item' : 'Add Item'}
            </button>
          </form>
       </div>
    )
  }
}
