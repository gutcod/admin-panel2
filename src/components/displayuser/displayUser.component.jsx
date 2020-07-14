import React, {Component} from 'react';

import { CardList } from '../card-list/card-list.component';
import { SearchBox } from '../search-box/searchbox.component';

class DisplayUser extends Component{
  constructor(){
    super();

    this.state = 
      {
        monsters: [],
        searchField: ''
      }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => this.setState({monsters: user}))
  }

  handleChange = el =>{
    this.setState({searchField: el.target.value})
  }

  render(){
    const {monsters, searchField} = this.state;
    const filterMonsters = monsters.filter( monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox 
        placeholder ="search monster" 
        handleChange = {this.handleChange}
      />
      <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default DisplayUser;
