import React, { Component } from 'react';

export default class TodoItem extends Component {
  render() {
      const {title, handleDelete, handleEdit} = this.props;
    return (
      <div className='item-container'>
        <p>{title}
          <span className="edit-btn" onClick={handleEdit}>
            <i className="fas fa-pen"></i>
          </span>
          <span className="delete-btn" onClick={handleDelete}>
            <i className="fas fa-trash"></i>
          </span>
        </p>
      </div>
    );
  }
}
