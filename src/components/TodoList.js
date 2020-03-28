import React, { Component } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';
import { configure } from '@testing-library/react';

export default class TodoList extends Component {

  
  render() {
    const {items, clearList, handleDelete, handleEdit} = this.props

    const bands = [
      { title: "Led Zeppelin", 
        musicians: [{name: "John Paul Jones"}, {name:"Robert Plant"}, {name: "Jimmy Page"}, {name: "John Bonham"}]},
      { title: "Pink Floyd", 
        musicians: [{name: "Syd Barret"}, {name:"Roger Waters"}, {name: "Rick Wright"}, {name:"Nick Mason"}, {name:"David Gilmour"}]},
      { title: "Beatles", 
        musicians: [{name:"John Lennon"}, {name:"Paul McCatrney"}, {name:"Jeorge Harrison "}, {name:"Ringo Starr"}]},
    ]

    function search(musicianToFind) {

      function searchBand(band) { 
        return band.musicians.find(searchMusician)
      }
  
      function searchMusician(musician) { 
        return musician.name === musicianToFind;
      }
      
      const band = bands.find(searchBand);
      if (band !== undefined) {
        const musician = band.musicians.find(searchMusician)
        return {
          groupTitle: band.title,
          musicianName: musician.name
        }
      } else {
        return {
          groupTitle: "",
          musicianName: ""
        };
      }
    } 

    const result = search("Rick Wright2");

    
    return (
      <div className="list-container">
       
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
            Clear
        </button>
      
      </div>
    )
  }
}
