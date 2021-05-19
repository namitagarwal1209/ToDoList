import React from 'react';
import logo from './my-logo.jpg';
import './App.css';

class App extends React.Component {

  //CREATING CONSTRUCTOR
  constructor(props){
    super(props);
    this.state = {
      newItem: "",
      list: []
    }
  }

  //method to add values to list
  addItem (todoValue){ 
    if(todoValue !== ""){
      const newItem = {
        id : Date.now(),
        value : todoValue,
        isDone : false
      };
    const list = [...this.state.list];
    list.push(newItem);

    this.setState({
      list,
      newItem: ""
    });
    }
  }

  deleteItem(id){
    const list = [...this.state.list];
    const updated_list = list.filter(item => item.id !== id);

    this.setState({
      list : updated_list
    });
  }

  updateInput(input){
    this.setState({
      newItem : input
    });
  }
  render(){
    return(
      <div>

        <img src= {logo} width="100" height="100" className= 'logo' />
        <h1 className='title'> Namit's ToDo List </h1>

        <div className='container' >
          Add an item...
          <br />
          <br/>
          <input 
            type='text' 
            className='input-text' 
            placeholder='Write a ToDo' 
            value = {this.state.newItem}
            onChange = {e => this.updateInput(e.target.value)}
            />

          <button 
            className='addBtn'
            onClick = { () => this.addItem(this.state.newItem) }
            disabled = {!this.state.newItem.length}
            >Add ToDo </button>

          <div className='list'>
            <ul>
              {this.state.list.map( item => {
                return(
                  <li key = {item.id}>
                    <input
                      type = "checkbox"
                      name = "isDone"
                      checked = {item.isDone}
                      onChange = { () => {}}
                      />
                    {item.value}
                    <button
                      className = 'delete-btn'
                      onClick = {() => this.deleteItem(item.id)}
                    > Delete</button>
                  </li>
                )
              })}
              
            </ul>
          </div>
        </div>

      </div>
    );
  }

}

export default App;

