import React, { Component } from "react";

import { CardList } from "../card-list/card-list.component";
import { SearchBox } from "../search-box/searchbox.component";
import Form from "../form/form.component";

class DisplayUser extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => this.setState({ monsters: user }));
  }

  handleChange = (el) => {
    this.setState({ searchField: el.target.value });
  };

  removeContact = (id) => {
    const monstersCopy = [...this.state.monsters].filter(
      (monster) => monster.id !== id
    );
    this.setState({ monsters: monstersCopy });
  };

  createNewUser = (name, email, phone) => {
    const newMonsterId =
      Math.max(...this.state.monsters.map((monster) => monster.id)) + 1;
    this.setState({
      monsters: [
        ...this.state.monsters,
        { id: newMonsterId, name, email, phone },
      ],
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filterMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Contact list</h1>
        <Form createNewUser={this.createNewUser} />
        <SearchBox
          placeholder="search contact"
          handleChange={this.handleChange}
        />
        <CardList monsters={filterMonsters} onRemove={this.removeContact} />
      </div>
    );
  }
}

export default DisplayUser;
