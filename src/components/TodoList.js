import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    const {items, clearList, handleDelete, handleEdit} = this.props
    return (
      <div className="list-container">
        <ul className='list-list'>
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
        </ul>
      </div>
    )
  }
}
