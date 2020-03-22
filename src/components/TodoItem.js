import React, { Component } from 'react';
import { IconContext } from "react-icons";

import { MdEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';

export default class TodoItem extends Component {
  render() {
      const {title, handleDelete, handleEdit} = this.props;
    return (
      <div className='item-container'>
      
        <div>
          {title}
        </div>
        
        <div className="edit-btn" onClick={handleEdit} >
          <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "1.5em" }}>
              <MdEdit />
          </IconContext.Provider>
        </div>
        
        <div className="delete-btn" onClick={handleDelete}>
          <IconContext.Provider value={{ color: "white", className: "global-class-name", size: "1.5em" }}>
            <MdDelete />
          </IconContext.Provider>
        </div>
     
      </div>
    );
  }
}
