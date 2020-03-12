import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    const {items, clearList, handleDelete, handleEdit} = this.props
    return (
      <ul className="list-group">
        <div className='list-container'>
        {
            items.map(item => {
                return (
                    <TodoItem 
                        key={item.id} 
                        title={item.title} 
                        handleDelete={() => handleDelete(item.id)}
                        handleEdit={() => handleEdit(item.id)}    
                    />
                )
            })
        }
        <button 
          type="button" 
          className="clear-btn"
          onClick={clearList}>
            clear
        </button>
        </div>
      </ul>
    )
  }
}
