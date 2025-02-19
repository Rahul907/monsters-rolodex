import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.components';

class App extends Component{
  constructor(){
    super();

    this.state = {
     monsters: [],
     searchFeild: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}));
  }

  handleChange = (e) => {
    this.setState({ searchFeild: e.target.value })
  }

  render(){
    const { monsters, searchFeild } = this.state;
    const  filteredMonsters = monsters.filter(monsters => 
      monsters.name.toLowerCase().includes(searchFeild.toLowerCase()));
    return (
      <div className="App">
      <h1>Monsters Roledox</h1>
      <SearchBox 
        placeholder='monster search' 
        handleChange = {this.handleChange} 
      />
      <CardList  monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
