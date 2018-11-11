import React, { Component } from "react";
import "./App.css";
import Table from "./Table";
import Form from './Form';

class App extends Component {
  state = {
    characters: []
  };

  removeCharacter = index => {
    const {characters} = this.state;

    this.setState({
      characters: characters.filter((character,i) => {
        return i !== index;
      })
    });

  }

  handleSubmit = character => {
    this.setState({
      characters: [...this.state.characters,character]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>React Tutorial - SuperHeroes Collection</h1>
        <p>Add new Superheroes or Delete them.</p>
        <Table characterData={this.state.characters} removeCharacter={this.removeCharacter} />
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
